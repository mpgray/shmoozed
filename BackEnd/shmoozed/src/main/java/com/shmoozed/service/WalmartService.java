package com.shmoozed.service;

import java.io.UnsupportedEncodingException;
import java.math.BigDecimal;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.util.stream.StreamSupport;

import com.shmoozed.controller.RestTemplateResponseErrorHandler;
import com.shmoozed.model.Item;
import com.shmoozed.model.ItemPriceHistory;
import com.shmoozed.model.WalmartItem;
import com.shmoozed.repository.WalmartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WalmartService {
  private Logger logger = LoggerFactory.getLogger(WalmartService.class);
  private WalmartRepository walmartRepository;
  private RestTemplate restTemplate;
  private ItemService itemService;
  private ItemPriceHistoryService itemPriceHistoryService;

  private final String apiKey = "ffqfc5hpwnqazpeua9w7e64u";
  private final String apiUrl = "http://api.walmartlabs.com";
  private final String v1ItemsUrl = "/v1/items/{item_id}?format=json&apiKey={api_key}";

  @Autowired
  public WalmartService(RestTemplateBuilder restTemplateBuilder, WalmartRepository walmartRepository, ItemService itemService, ItemPriceHistoryService itemPriceHistoryService) {
    this.walmartRepository = walmartRepository;
    this.itemService = itemService;
    this.itemPriceHistoryService = itemPriceHistoryService;

    this.restTemplate = restTemplateBuilder
      .rootUri(apiUrl)
      .errorHandler(new RestTemplateResponseErrorHandler())
      .build();
  }

  public WalmartItem getItemById(int itemId) {
    logger.debug("Attempting to find walmart item by id itemId={}", itemId);
    logger.trace("RestTemplate restTemplate={}", restTemplate);
    return restTemplate.getForObject(v1ItemsUrl, WalmartItem.class, itemId, apiKey);
  }

  public WalmartItem insertNewWalmartItem(WalmartItem walmartItem) {
    logger.debug("Attempting to insert walmartItem={}", walmartItem);
    logger.trace("restTemplate={}", restTemplate);
    logger.trace("walmartRepository={}", walmartRepository);

    //create the item
    Item newItem = insertItem(walmartItem);
    logger.debug("New Item inserted into database. newItem={}", newItem);
    walmartItem.setLinkedItemId(newItem.getId());

    //save walmart item
    WalmartItem newWalmartItem = walmartRepository.save(walmartItem);

    //insert item price history
    ItemPriceHistory newItemPriceHistory = insertItemPriceHistory(walmartItem);

    logger.debug("New walmartItem inserted into database. newWalmartItem={}", newWalmartItem);
    return newWalmartItem;
  }

  private Item insertItem(WalmartItem walmartItem){
    Item item = new Item();
    item.setName(walmartItem.getName());
    item.setQuantity(1);
    return itemService.insertNewItem(item);
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

  public WalmartItem getItemByUrl(String theUrl) {
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
    WalmartItem walmartItem = getItemById(itemId);
    return insertNewWalmartItem(walmartItem);
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
    StreamSupport.stream(walmartRepository.findAll().spliterator(), false)
      .map(walmartItem -> getItemById(walmartItem.getItemId()))
      .peek(this::updateWalmartItemInDatabase)
      .forEach(this::insertItemPriceHistory);
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
