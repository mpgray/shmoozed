package com.shmoozed.controller;

import java.util.List;

import com.shmoozed.model.BuyerItem;
import com.shmoozed.model.Item;
import com.shmoozed.model.SellerItem;
import com.shmoozed.model.WalmartItem;
import com.shmoozed.service.WalmartService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin // Allow All CORS Requests. See https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
@RestController
@RequestMapping(path = "/walmart")
public class WalmartController {

  private Logger logger = LoggerFactory.getLogger(WalmartController.class);

  private WalmartService walmartService;

  @Autowired
  public WalmartController(WalmartService walmartService) {
    this.walmartService = walmartService;
  }

  @GetMapping(
    path="/itemid/{itemid}",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<WalmartItem> getItemById(@PathVariable("itemid") int itemId) {
    logger.debug("Request for item by id. itemId={}", itemId);
    WalmartItem walmartItem = walmartService.getItemById(itemId);
    return new ResponseEntity<>(walmartItem, HttpStatus.OK);
  }

  @GetMapping(
    path="/itemurl/{theurl}",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<WalmartItem> getItemByUrl(@PathVariable("theurl") String url) {
    logger.debug("Request for item by url. url={}", url);
    //this doesn't actually work yet ;)
    WalmartItem walmartItem = walmartService.getItemByUrl(url);
    return new ResponseEntity<>(walmartItem, HttpStatus.OK);
  }









/*
  @PostMapping(
    path = "/buyer",
    consumes = APPLICATION_JSON_VALUE,
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<BuyerItem> insertNewBuyerItem(@RequestHeader("Authorization") String token,
                                                                    @RequestBody BuyerItem buyerItem) {
    logger.debug("Request to add new buyer item. token={}, buyerItem={}", token, buyerItem);

    BuyerItem newBuyerItem = walmartService.insertNewBuyerItem(buyerItem);

    return new ResponseEntity<>(newBuyerItem, HttpStatus.OK);
  }

  @GetMapping(
    path = "/seller",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody
  ResponseEntity<List<SellerItem>> getSellerItems(@RequestHeader("Authorization") String token) {
    logger.debug("Request to get all seller items. token={}", token);
    List<SellerItem> allSellerItems = walmartService.getAllSellerItems();
    return new ResponseEntity<>(allSellerItems, HttpStatus.OK);
  }

  @GetMapping(
    path = "/buyer",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody
  ResponseEntity<List<BuyerItem>> getBuyerItems(@RequestHeader("Authorization") String token) {
    logger.debug("Request to get all seller items. token={}", token);
    List<BuyerItem> allBuyerItems = walmartService.getAllBuyerItems();
    return new ResponseEntity<>(allBuyerItems, HttpStatus.OK);
  }

  @GetMapping(
    path = "/seller/{seller_id}",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody
  ResponseEntity<List<SellerItem>> getSellerItemsForSeller(@RequestHeader("Authorization") String token,
                                                           @PathVariable("seller_id") String sellerId) {
    logger.debug("Request to get seller items for specific seller. token={} sellerId={}", token, sellerId);
    List<SellerItem> sellerItems =
      walmartService.getSellerItemsBySellerId(Integer.valueOf(sellerId));

    if (sellerItems.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(sellerItems, HttpStatus.OK);
  }

  @GetMapping(
    path = "/seller/{buyer_id}",
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody
  ResponseEntity<List<BuyerItem>> getBuyerItemsForSeller(@RequestHeader("Authorization") String token,
                                                         @PathVariable("buyer_id") String buyerId) {
    logger.debug("Request to get buyer items for specific buyer. token={} buyerId={}", token, buyerId);
    List<BuyerItem> buyerItems =
      walmartService.getBuyerItemsBySellerId(Integer.valueOf(buyerId));

    if (buyerItems.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(buyerItems, HttpStatus.OK);
  }

  @DeleteMapping(path = "/seller/{seller_item_id}")
  public @ResponseBody ResponseEntity<Void> deleteSellerItemById(@RequestHeader("Authorization") String token,
                                                                 @PathVariable("seller_item_id") String sellerItemId) {
    logger.debug("Request to delete seller item. token={}, sellerId={}", token, sellerItemId);

    walmartService.deleteSellerItem(Integer.valueOf(sellerItemId));

    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping(path = "/buyer/{buyer_item_id}")
  public @ResponseBody ResponseEntity<Void> deleteBuyerItemById(@RequestHeader("Authorization") String token,
                                                                @PathVariable("buyer_item_id") String buyerItemId) {
    logger.debug("Request to delete buyer item. token={}, buyerItemId={}", token, buyerItemId);

    walmartService.deleteBuyerItem(Integer.valueOf(buyerItemId));

    return new ResponseEntity<>(HttpStatus.OK);
  }*/
}
