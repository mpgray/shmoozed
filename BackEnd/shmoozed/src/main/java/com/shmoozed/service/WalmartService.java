package com.shmoozed.service;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;

import com.shmoozed.model.BuyerItem;
import com.shmoozed.model.Item;
import com.shmoozed.model.ItemPriceHistory;
import com.shmoozed.model.WalmartItem;
import com.shmoozed.remote.WalmartClient;
import com.shmoozed.repository.WalmartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WalmartService {
  private Logger logger = LoggerFactory.getLogger(WalmartService.class);
  private WalmartClient walmartClient;
  private WalmartRepository walmartRepository;
  private ItemService itemService;
  private ItemPriceHistoryService itemPriceHistoryService;
  private BuyerSellerItemsService buyerSellerItemsService;

  @Autowired
  public WalmartService(WalmartClient walmartClient, WalmartRepository walmartRepository, ItemService itemService, ItemPriceHistoryService itemPriceHistoryService,
                        BuyerSellerItemsService buyerSellerItemsService) {
    this.walmartClient = walmartClient;
    this.walmartRepository = walmartRepository;
    this.itemService = itemService;
    this.itemPriceHistoryService = itemPriceHistoryService;
    this.buyerSellerItemsService = buyerSellerItemsService;
  }

  public WalmartItem getItemById(int itemId) {
    logger.debug("Attempting to find walmart item by id itemId={}", itemId);
    return walmartClient.getItemById(itemId);
  }

  public WalmartItem insertNewWalmartItem(WalmartItem walmartItem) {
    logger.debug("Attempting to insert walmartItem={}", walmartItem);
    logger.trace("walmartRepository={}", walmartRepository);

    //get or create the walmart item
    WalmartItem newWalmartItem = getOrCreateWalmartItem(walmartItem, 1);

    //insert item price history
    ItemPriceHistory newItemPriceHistory = insertItemPriceHistory(walmartItem);

    logger.debug("New walmartItem inserted into database. newWalmartItem={}", newWalmartItem);
    return newWalmartItem;
  }

  public WalmartItem insertNewWalmartItemWithBuyerInfo(WalmartItem walmartItemIn, int quantity, BigDecimal price, int userId) {
    logger.debug("Attempting to insert walmartItem={}", walmartItemIn);
    logger.trace("walmartRepository={}", walmartRepository);

    //get or create the walmart item
    WalmartItem newWalmartItem = getOrCreateWalmartItem(walmartItemIn, quantity);

    //insert item price history
    ItemPriceHistory newItemPriceHistory = insertItemPriceHistory(newWalmartItem);
    logger.debug("New ItemPriceHistory inserted into database. newItemPriceHistory={}", newItemPriceHistory);

    //insert buyer item
    BuyerItem buyerItem = insertBuyerItem(newWalmartItem.getLinkedItemId(), price, userId);
    logger.debug("New buyerItem inserted into database. buyerItem={}", buyerItem);

    return newWalmartItem;
  }

  private WalmartItem getOrCreateWalmartItem(WalmartItem walmartItem, int quantity){
    Item newItem;
    WalmartItem newWalmartItem = walmartItem;
    //check if we have an existing item
    if(newWalmartItem.getItemId() == 0){
      //create the item
      newItem = insertItem(newWalmartItem, quantity);
      logger.debug("New Item inserted into database. newItem={}", newItem);
      newWalmartItem.setLinkedItemId(newItem.getId());
      //save walmart item
      newWalmartItem = walmartRepository.save(newWalmartItem);
      logger.debug("New walmartItem inserted into database. newWalmartItem={}", newWalmartItem);
    }
    else
    {
      //find the existing item
      newWalmartItem = getItemById(newWalmartItem.getItemId());
    }

    return newWalmartItem;
  }

  private Item insertItem(WalmartItem walmartItem, int quantity){
    Item item = new Item();
    item.setName(walmartItem.getName());
    item.setQuantity(quantity);
    return itemService.insertNewItem(item);
  }

  private BuyerItem insertBuyerItem(int itemId, BigDecimal price, int userId){
    BuyerItem buyerItem = new BuyerItem();
    buyerItem.setItemId(itemId);
    buyerItem.setPrice(price);
    buyerItem.setUserId(userId);
    return buyerSellerItemsService.insertNewBuyerItem(buyerItem);
  }

  private ItemPriceHistory insertItemPriceHistory(WalmartItem walmartItem){
    ItemPriceHistory itemPriceHistory = new ItemPriceHistory();
    itemPriceHistory.setItemId(walmartItem.getLinkedItemId());
    itemPriceHistory.setPrice(new BigDecimal(walmartItem.getSalePrice()));
    Timestamp timestamp = new Timestamp(System.currentTimeMillis());
    itemPriceHistory.setDate(timestamp);
    itemPriceHistory.setLastUpdateDate(timestamp);
    return itemPriceHistoryService.insertNewItemHistory(itemPriceHistory);
  }

  public WalmartItem findWalmartItemByUrl(String theUrl) {
    //https://www.walmart.com/ip/PAW-Patrol-Paw-Patrol-Ultimate-Rescue-Fire-Truck-with-Extendable-2-ft-Tall-Ladder/814913483
    logger.debug("in getItemByUrl theUrl={}", theUrl);
    int itemId = 0;
    try {
      String path = theUrl.substring(theUrl.lastIndexOf("/") + 1);
      if(path.indexOf('?') > -1){
        path = path.substring(0,path.indexOf('?'));
      }
      if(path.indexOf('/') > -1){
        path = path.substring(0,path.indexOf('/'));
      }
      if(path.indexOf('\"') > -1){
        path = path.substring(0,path.indexOf('\"'));
      }
      logger.debug("in getItemByUrl path={}", path);
      itemId = Integer.parseInt(path);
      logger.debug("in getItemByUrl itemId={}", itemId);
    }
    catch (Exception e ){
      //in case we cannot get the id from the url, will trap and return item 0
    }
    return walmartClient.getItemById(itemId);
  }

  private String decode(String value) {
    try {
      return URLDecoder.decode(value, StandardCharsets.UTF_8.toString());
    }
    catch (UnsupportedEncodingException e) {
      e.printStackTrace();
    }
    return "";
  }

  public void refreshAllItems() {
    walmartRepository.findAllByOrderByItemId().stream()
      .map(walmartItem -> walmartClient.getItemById(walmartItem.getItemId()))
      .filter(this::itemExistedInWalmartApi) // Filter out any items which had an error when calling Walmart API
      .peek(this::updateWalmartItemInDatabase)
      .forEach(this::insertItemPriceHistory);
  }

  private boolean itemExistedInWalmartApi(WalmartItem walmartItem) {
    // If walmart erturned a 4XX level error, the resulting WalmartItem will have an ID of 0 and should be filtered out
    boolean itemWasFound = walmartItem.getItemId() != 0;

    if (!itemWasFound) {
      logger.warn("Item Not Found in Walmart API");
    }

    return itemWasFound;
  }

  private void updateWalmartItemInDatabase(WalmartItem refreshedWalmartItem) {
    logger.debug("Updating walmart item. refreshedWalmartItem={}", refreshedWalmartItem);

    WalmartItem existingWalmartItem = walmartRepository.findById(refreshedWalmartItem.getItemId())
      .orElseThrow(IllegalArgumentException::new);

    logger.debug("Found existing walmart item. existingWalmartItem={}", existingWalmartItem);

    // Make sure that the linked item remains the same
    refreshedWalmartItem.setLinkedItemId(existingWalmartItem.getLinkedItemId());

    walmartRepository.save(refreshedWalmartItem);
  }

}
