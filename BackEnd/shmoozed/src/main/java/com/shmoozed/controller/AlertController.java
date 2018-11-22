package com.shmoozed.controller;

import com.shmoozed.model.Alert;
import com.shmoozed.service.AlertService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

public class AlertController {
    private Logger logger = LoggerFactory.getLogger(BuyerSellerItemsController.class);

    private AlertService alertService;

//    @PostMapping(
//            path = "/alert",
//            consumes = APPLICATION_JSON_VALUE,
//            produces = APPLICATION_JSON_VALUE
//    )
//    public @ResponseBody ResponseEntity<Alert> insertNewSellerItem(@RequestHeader("Authorization") String token,
//                                                                   @RequestBody Alert alert) {
//        logger.debug("Request to add new seller item. token={}, sellerItem={}", token, alert);
//
//        Alert newSellerItem = alertService.insertNewAlert(alert);
//
//        return new ResponseEntity<>(newSellerItem, HttpStatus.OK);
//    }


    @GetMapping(
            path = "/alert/{user_id}",
            produces = APPLICATION_JSON_VALUE
    )
    public @ResponseBody
    ResponseEntity<List<Alert>> getAlertsForUser(@RequestHeader("Authorization") String token,
                                                             @PathVariable("user_id") String userId) {
        logger.debug("Request to get seller items for specific seller. token={} sellerId={}", token, userId);
        List<Alert> sellerItems =
                alertService.getAlertsByUserId(Integer.valueOf(userId));

        if (sellerItems.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(sellerItems, HttpStatus.OK);
    }

    @DeleteMapping(path = "/alert/{alert_id}")
    public @ResponseBody
    ResponseEntity<Void> deleteBuyerItemById(@RequestHeader("Authorization") String token,
                                             @PathVariable("alert_id") String alertId) {
        logger.debug("Request to delete alert. token={}, alertId={}", token, alertId);

        alertService.deleteAlertById(Integer.valueOf(alertId));

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
