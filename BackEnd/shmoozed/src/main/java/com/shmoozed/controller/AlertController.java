package com.shmoozed.controller;

import com.shmoozed.model.Alert;
import com.shmoozed.model.BuyerItem;
import com.shmoozed.service.AlertService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@CrossOrigin // Allow All CORS Requests. See https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
@RestController
@RequestMapping(path = "/alert")
public class AlertController {
  private Logger logger = LoggerFactory.getLogger(AlertController.class);

  private AlertService alertService;

  @Autowired
  public AlertController(AlertService alertService) {
    this.alertService  = alertService;
  }


  //Need to fix ResponseEntity<ListBuyerItem>
  @GetMapping(
    produces = APPLICATION_JSON_VALUE
  )
  public @ResponseBody ResponseEntity<List<BuyerItem>> getAlertsForUser(@RequestHeader("Authorization") String token,
                                               @RequestParam("userId") int userId) {
    logger.debug("Request to get alert items for specific user. token={} userId={}", token, userId);
     List<BuyerItem> buyerItem = alertService.getAlertsByUserId(userId);

    if (buyerItem.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<>(buyerItem, HttpStatus.OK);
  }

  @DeleteMapping(path = "/{item_id}")
  public @ResponseBody ResponseEntity<Void> resetBuyerItemNotification(@RequestHeader("Authorization") String token,
                                           @PathVariable("item_id") int itemId) {
    logger.debug("Request to delete alert. token={}, alertId={}", token, itemId);

    alertService.resetNotification(itemId);

    return new ResponseEntity<>(HttpStatus.OK);
  }
}
