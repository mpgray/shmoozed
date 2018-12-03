package com.shmoozed.remote;

import com.shmoozed.controller.RestTemplateResponseErrorHandler;
import com.shmoozed.model.WalmartItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class WalmartClient {

  private Logger logger = LoggerFactory.getLogger(WalmartClient.class);

  private final RestTemplate restTemplate;

  private static final String API_KEY = "ffqfc5hpwnqazpeua9w7e64u";
  private static final String API_BASE_URL = "http://api.walmartlabs.com";
  private static final String V1_ITEMS_URL = "/v1/items/{item_id}?format=json&apiKey={api_key}";

  public WalmartClient(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder
      .rootUri(API_BASE_URL)
      .errorHandler(new RestTemplateResponseErrorHandler())
      .build();
  }

  public WalmartItem getItemById(int itemId) {
    logger.debug("Attempting to retrieve walmart item from API by id itemId={}", itemId);
    return restTemplate.getForObject(V1_ITEMS_URL, WalmartItem.class, itemId, API_KEY);
  }

}
