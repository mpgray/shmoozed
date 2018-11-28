package com.shmoozed.service;

import java.util.List;

import com.shmoozed.model.Alert;
import com.shmoozed.repository.AlertRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlertService {
    private Logger logger = LoggerFactory.getLogger(BuyerSellerItemsService.class);

    private final AlertRepository alertRepository;

    @Autowired
    public AlertService(AlertRepository alertRepository) {
        this.alertRepository = alertRepository;
    }

    public List<Alert> getAlertsByUserId(int userId) {
        logger.debug("Fetching all alerts for userId={}", userId);
        return (List<Alert>) alertRepository.findAlertsByUserId(userId);
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
}
