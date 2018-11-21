package com.shmoozed.controller;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

import com.shmoozed.model.Item;
import com.shmoozed.model.ItemPriceHistory;
import com.shmoozed.model.WalmartItem;
import com.shmoozed.service.ItemPriceHistoryService;
import com.shmoozed.service.ItemService;
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
  //private ItemService itemService;
  //private ItemPriceHistoryService itemPriceHistoryService;

  @Autowired
  public WalmartController(WalmartService walmartService) { //}, ItemService itemService, ItemPriceHistoryService itemPriceHistoryService) {

    this.walmartService = walmartService;
    //this.itemService = itemService;
    //this.itemPriceHistoryService = itemPriceHistoryService;
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

  @PostMapping(
    consumes = APPLICATION_JSON_VALUE,
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<WalmartItem> insertNewWalmartItem(@RequestHeader("Authorization") String token,
                                                          @RequestBody WalmartItem walmartItem) {
    logger.debug("Request to add new walmartItem. token={}, walmartItem={}", token, walmartItem);

    WalmartItem newWalmartItem = walmartService.insertNewWalmartItem(walmartItem);

    return new ResponseEntity<>(newWalmartItem, HttpStatus.OK);
  }

  @PostMapping(
    value = "/url",
    consumes = APPLICATION_JSON_VALUE,
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<WalmartItem> addItemByUrl(@RequestHeader("Authorization") String token,
                                                                @RequestBody String url) {
    logger.debug("Request to find walmart item by url. token={}, url={}", token, url);

    WalmartItem newWalmartItem = walmartService.getItemByUrl(url);

    return new ResponseEntity<>(newWalmartItem, HttpStatus.OK);
  }
}
