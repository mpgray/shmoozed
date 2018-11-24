package com.shmoozed.service;

import java.util.List;

import com.shmoozed.model.BuyerItem;
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

  @Autowired
  public BuyerSellerItemsService(BuyerItemRepository buyerItemRepository,
                                 SellerItemRepository sellerItemRepository) {
    this.buyerItemRepository = buyerItemRepository;
    this.sellerItemRepository = sellerItemRepository;
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

  public List<BuyerItem> getBuyerItemsByBuyerId(int buyerId) {
    logger.debug("Fetching all buyer items for buyerId={}", buyerId);
    return (List<BuyerItem>) buyerItemRepository.findBuyerItemsByUserId(buyerId);
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
