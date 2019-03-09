package com.shmoozed.service;

import java.util.List;

import com.shmoozed.model.Alert;
import com.shmoozed.model.BuyerItem;
import com.shmoozed.model.SellerItem;
import com.shmoozed.repository.AlertRepository;
import com.shmoozed.repository.BuyerItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlertService {
    private Logger logger = LoggerFactory.getLogger(BuyerSellerItemsService.class);

    private final AlertRepository alertRepository;
    private final BuyerItemRepository buyerItemRepository;

    @Autowired
    public AlertService(AlertRepository alertRepository, BuyerItemRepository buyerItemRepository) {
        this.buyerItemRepository = buyerItemRepository;
        this.alertRepository = alertRepository;
    }

    public List<BuyerItem> getAlertsByUserId(int userId) {
        logger.debug("Fetching all alerts for userId={}", userId);
        return buyerItemRepository.findBuyerItemsWithAlert(userId);
    }

    public void deleteAlertById(int alertId) {
        logger.debug("Removing alert alertId={}", alertId);
        alertRepository.deleteById(alertId);
    }

    public Alert insertNewAlert(Alert alert) {
        logger.debug("Attempting to insert alert={}", alert);
        Alert alertItem = alertRepository.save(alert);
        logger.debug("New alert item inserted. alert={}", alertItem);
        return alertItem;
    }

    public void buyerNotification(SellerItem sellerItem){

        for (BuyerItem buyerItem : buyerItemRepository.findAllByItemId(sellerItem.getItemId())) {
            logger.debug("Found item on: " + buyerItem.toString());
            logger.debug("Found item on: " + sellerItem.toString());

            if(buyerItem.getPrice().compareTo(sellerItem.getPrice()) < 1){

                logger.debug("Notify user set buyerItem notify to true");
                buyerItem.setNotifyUser(true);
            }

        }

    }

    public void resetNotification(int itemId){

        logger.debug("Need to implement reset condition");
        //buyerItem.setNotifyUser(false);
    }
}
