package com.shmoozed.service;

import java.util.List;
import java.util.Optional;

import com.shmoozed.model.BuyerItem;
import com.shmoozed.model.DetailedBuyerItem;
import com.shmoozed.model.DetailedItem;
import com.shmoozed.model.DetailedSellerItem;
import com.shmoozed.model.SellerItem;
import com.shmoozed.repository.BuyerItemRepository;
import com.shmoozed.repository.SellerItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BuyerSellerItemsService {

  private Logger logger = LoggerFactory.getLogger(BuyerSellerItemsService.class);

  private final BuyerItemRepository buyerItemRepository;
  private final SellerItemRepository sellerItemRepository;

  private final ItemService itemService;

  @Autowired
  public BuyerSellerItemsService(BuyerItemRepository buyerItemRepository,
                                 SellerItemRepository sellerItemRepository,
                                 ItemService itemService) {
    this.buyerItemRepository = buyerItemRepository;
    this.sellerItemRepository = sellerItemRepository;
    this.itemService = itemService;
  }

  public List<SellerItem> getAllSellerItems() {
    logger.debug("Fetching all seller items");
    return (List<SellerItem>) sellerItemRepository.findAll();
  }

  public List<BuyerItem> getAllBuyerItems() {
    logger.debug("Fetching all buyer items");
    return (List<BuyerItem>) buyerItemRepository.findAll();
  }

  public List<SellerItem> getSellerItemsBySellerId(int sellerId) {
    logger.debug("Fetching all seller items for sellerId={}", sellerId);
    return (List<SellerItem>) sellerItemRepository.findSellerItemsByUserId(sellerId);
  }

  public DetailedSellerItem getDetailedSellerItemBySellerItemId(int sellerItemId) {
    logger.debug("Fetching detailed seller item for sellerItemId={}", sellerItemId);

    Optional<SellerItem> possibleSellerItem = sellerItemRepository.findById(sellerItemId);

    if (possibleSellerItem.isPresent()) {
      SellerItem sellerItem = possibleSellerItem.get();
      Optional<DetailedItem> possibleDetailedItem = itemService.getDetailedItem(sellerItem.getItemId());

      if (possibleDetailedItem.isPresent()) {
        // TODO: What do we do about Detailed Items which only have and Item? Wouldn't we still want to return them?
        DetailedSellerItem detailedSellerItem = new DetailedSellerItem(sellerItem, possibleDetailedItem.get());
        logger.debug("Found detailed seller item for sellerItemId={} detailedSellerItem={}", sellerItemId, detailedSellerItem);
        return detailedSellerItem;
      }
      else {
        logger.warn("Seller Item found for sellerItemId={} but no detailed item found. sellerItem={}", sellerItemId, sellerItem);
      }
    }

    return null;
  }

  public List<BuyerItem> getBuyerItemsByBuyerId(int buyerId) {
    logger.debug("Fetching all buyer items for buyerId={}", buyerId);
    return (List<BuyerItem>) buyerItemRepository.findBuyerItemsByUserId(buyerId);
  }

  public DetailedBuyerItem getDetailedBuyerItemByBuyerItemId(int buyerItemId) {
    logger.debug("Fetching detailed seller item for buyerItemId={}", buyerItemId);

    Optional<BuyerItem> possibleBuyerItem = buyerItemRepository.findById(buyerItemId);

    if (possibleBuyerItem.isPresent()) {
      BuyerItem buyerItem = possibleBuyerItem.get();
      Optional<DetailedItem> possibleDetailedItem = itemService.getDetailedItem(buyerItem.getItemId());

      if (possibleDetailedItem.isPresent()) {
        // TODO: What do we do about Detailed Items which only have and Item? Wouldn't we still want to return them?
        DetailedBuyerItem detailedBuyerItem = new DetailedBuyerItem(buyerItem, possibleDetailedItem.get());
        logger.debug("Found detailed buyer item for buyerItemId={} detailedBuyerItem={}", buyerItemId, detailedBuyerItem);
        return detailedBuyerItem;
      }

      else {
        logger.warn("Buyer Item found for buyerItemId={} but no detailed item found. buyerItem={}", buyerItemId, buyerItem);
      }
    }

    return null;
  }

  public SellerItem insertNewSellerItem(SellerItem sellerItem) {
    logger.debug("Attempting to insert sellerItem={}", sellerItem);
    SellerItem newSellerItem = sellerItemRepository.save(sellerItem);
    logger.debug("New seller item inserted. sellerItem={}", newSellerItem);
    return newSellerItem;
  }

  public BuyerItem insertNewBuyerItem(BuyerItem buyerItem) {
    logger.debug("Attempting to insert buyerItem={}", buyerItem);
    BuyerItem newBuyerItem = buyerItemRepository.save(buyerItem);
    logger.debug("New buyer item inserted. buyerItem={}", newBuyerItem);
    return newBuyerItem;
  }

  public void deleteSellerItem(int sellerItemId) {
    logger.debug("Deleting seller item sellerItemId={}", sellerItemId);
    sellerItemRepository.deleteById(sellerItemId);
  }

  public void deleteBuyerItem(int buyerItemId) {
    logger.debug("Deleting seller item buyerItemId={}", buyerItemId);
    buyerItemRepository.deleteById(buyerItemId);
  }

}
