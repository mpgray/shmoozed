package com.shmoozed.remote;

import java.util.List;

import com.shmoozed.controller.RestTemplateResponseErrorHandler;
import com.shmoozed.model.BestBuyItem;
import com.shmoozed.model.BestBuyItemResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class BestBuyClient {
  private Logger logger = LoggerFactory.getLogger(BestBuyClient.class);
  private final RestTemplate restTemplate;

  private static final String API_KEY = "9hSBRQLAT9D8vc3Uo7H6uX1d";
  private static final String API_BASE_URL = "https://api.bestbuy.com/";
  private static final String V1_PRODUCTS_URL = "/v1/products/{item_id}?format=json&apiKey={api_key}";

  public BestBuyClient(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder
      .rootUri(API_BASE_URL)
      .errorHandler(new RestTemplateResponseErrorHandler())
      .build();
  }

  public BestBuyItem getItemById(int itemId) {
    logger.debug("Attempting to retrieve bestbuy item from API by id itemId={}", itemId);
    return restTemplate.getForObject(V1_PRODUCTS_URL, BestBuyItem.class, itemId, API_KEY);
  }

  public List<BestBuyItem> searchBestBuySiteForItem(String searchTerm)
  {
    logger.debug("Attempting to search bestbuy API for searchTerm={}", searchTerm);
    BestBuyItemResponse
      bestBuyItemResponse = restTemplate.getForObject(V1_PRODUCTS_URL, BestBuyItemResponse.class, API_KEY, searchTerm);
    return bestBuyItemResponse.getItems();
  }

}
