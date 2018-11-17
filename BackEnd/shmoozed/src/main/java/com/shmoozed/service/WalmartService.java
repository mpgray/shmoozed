package com.shmoozed.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import com.shmoozed.controller.RestTemplateResponseErrorHandler;
import com.shmoozed.model.WalmartItem;
import com.shmoozed.repository.WalmartRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WalmartService {
  private Logger logger = LoggerFactory.getLogger(WalmartService.class);
  private WalmartRepository walmartRepository;
  private RestTemplate restTemplate;
  private final String apiKey = "ffqfc5hpwnqazpeua9w7e64u";
  private final String apiUrl = "http://api.walmartlabs.com";
  private final String v1ItemsUrl = "/v1/items/{item_id}?format=json&apiKey={api_key}";

  /*@Autowired
  public WalmartService(WalmartRepository walmartRepository) {
    this.walmartRepository = walmartRepository;
  }*/

  @Autowired
  public WalmartService(RestTemplateBuilder restTemplateBuilder, WalmartRepository walmartRepository) {
    this.walmartRepository = walmartRepository;
    this.restTemplate = restTemplateBuilder
      .rootUri(apiUrl)
      .errorHandler(new RestTemplateResponseErrorHandler())
      .build();
  }

  public WalmartItem getItemById(int itemId)
  {
    logger.debug("Attempting to find walmart item by id itemId={}", itemId);
    logger.debug("RestTemplate restTemplate={}", restTemplate);
    //WalmartItem wi = restTemplate.getForObject(v1ItemsUrl, WalmartItem.class, itemId, apiKey);
    WalmartItem wi = restTemplate.getForObject(v1ItemsUrl, WalmartItem.class, itemId, apiKey);
    return wi;
  }

  public WalmartItem insertNewWalmartItem(WalmartItem walmartItem) {
    logger.debug("Attempting to insert walmartItem={}", walmartItem);
    logger.debug("restTemplate={}", restTemplate);
    logger.debug("walmartRepository={}", walmartRepository);


    /////placeholder for item id (not walmart item id)
    walmartItem.setLinkedItemId(1);




    WalmartItem newWalmartItem = walmartRepository.save(walmartItem);

    logger.debug("New walmartItem inserted into database. newWalmartItem={}", newWalmartItem);
    return newWalmartItem;
  }

  public WalmartItem getItemByUrl(String theUrl) {
    //https://www.walmart.com/ip/PAW-Patrol-Paw-Patrol-Ultimate-Rescue-Fire-Truck-with-Extendable-2-ft-Tall-Ladder/814913483
    logger.debug("in getItemByUrl theUrl={}", theUrl);
    int itemId = 0;
    try {
      String path = theUrl.substring(theUrl.lastIndexOf("/") + 1);
      if(path.indexOf('?') > -1){
        path = path.substring(0,path.indexOf('?'));
      }
      if(path.indexOf('/') > -1){
        path = path.substring(0,path.indexOf('/'));
      }
      if(path.indexOf('\"') > -1){
        path = path.substring(0,path.indexOf('\"'));
      }
      //path = path.substring(0, path.length() - 1);


      logger.debug("in getItemByUrl path={}", path);
      itemId = Integer.parseInt(path);
      logger.debug("in getItemByUrl itemId={}", itemId);
    }
    catch (Exception e ){
      //in case we cannot get the id from the url, will trap and return item 0
    }
    return getItemById(itemId);
  }

  private String decode(String value) {
    try {
      return URLDecoder.decode(value, StandardCharsets.UTF_8.toString());
    }
    catch (UnsupportedEncodingException e) {
      e.printStackTrace();
    }
    return "";
  }



}
