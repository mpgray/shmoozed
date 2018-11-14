package com.shmoozed.service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.security.GeneralSecurityException;
import java.time.Duration;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.shmoozed.controller.RestTemplateResponseErrorHandler;
import com.shmoozed.model.WalmartItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.google.api.client.json.gson.GsonFactory;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import static java.util.Collections.singletonList;

@Service
public class WalmartService {

  private Logger logger = LoggerFactory.getLogger(WalmartService.class);

  private RestTemplate restTemplate;
  private final String apiKey = "ffqfc5hpwnqazpeua9w7e64u";
  private final String apiUrl = "http://api.walmartlabs.com";
  private final String v1ItemsUrl = "/v1/items/{item_id}?format=json&apiKey={api_key}";

  public WalmartService(RestTemplateBuilder restTemplateBuilder) {
    this.restTemplate = restTemplateBuilder
      .rootUri(apiUrl)
      .errorHandler(new RestTemplateResponseErrorHandler())
      .build();

  }

  public WalmartItem getItemById(int itemId)
  {
    WalmartItem wi = restTemplate.getForObject(v1ItemsUrl, WalmartItem.class, itemId, apiKey);
    return wi;
  }

  public WalmartItem getItemByUrl(String theUrl) {
    //https://www.walmart.com/ip/PAW-Patrol-Paw-Patrol-Ultimate-Rescue-Fire-Truck-with-Extendable-2-ft-Tall-Ladder/814913483
    logger.debug("in getItemByUrl theUrl={}", theUrl);
    /*URL url = null;
    try {
      url = new URL(theUrl);
    }
    catch (MalformedURLException e) {
      e.printStackTrace();
    }
    String path = url.getPath();*/
    String path = decode(theUrl);
    path = path.substring(path.lastIndexOf("/"));
    int itemId = Integer.parseInt(path);
    logger.debug("in getItemByUrl itemId={}", itemId);
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
