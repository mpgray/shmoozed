package com.shmoozed.service;

import java.io.IOException;
import java.security.GeneralSecurityException;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.shmoozed.model.WalmartItem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;

import com.google.api.client.json.gson.GsonFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import static java.util.Collections.singletonList;

@Service
public class WalmartService {

  private RestTemplate restTemplate;
  private final String apiKey = "'ffqfc5hpwnqazpeua9w7e64u";
  private final String apiUrl = "http://api.walmartlabs.com/";

  public WalmartItem getSomething()
  {


    RestTemplate restTemplate = new RestTemplate();
    // fooResourceUrl
    //  = "http://localhost:8080/spring-rest/foos";
    WalmartItem wi = restTemplate.getForObject(apiUrl + "/v1/items/42608125" + "?format=json&apiKey=" + apiKey, WalmartItem.class);

    return wi;
    /*
   //ResponseEntity<String> response = restTemplate.getForEntity(ApiUrl + "/v1/items/42608125", String.class);
    HttpStatus aa = response.getStatusCode();
    //assertThat(response.getStatusCode(), equalTo(HttpStatus.OK));
*/
    /*ObjectMapper mapper = new ObjectMapper();
    JsonNode root = mapper.readTree(response.getBody());
    JsonNode name = root.path("name");
    assertThat(name.asText(), notNullValue());*/
    /*return response.getBody();*/

  }

  //http://api.walmartlabs.com/v1/items/12417832?apiKey={apiKey}&lsPublisherId={Your LinkShare Publisher Id}&format=json

  //need to get from walmart url
  //https://www.walmart.com/ip/Apple-iPod-touch-128GB/541357139









  /*private Logger logger = LoggerFactory.getLogger(GoogleService.class);

  private final String clientId;
  private final boolean shouldLogTokenDetails;

  private NetHttpTransport transport = new NetHttpTransport();
  private JsonFactory jsonFactory = new GsonFactory();

  public GoogleService(@Value("${google.client-id}")String clientId,
                       @Value("${google.log-token-details}")boolean shouldLogTokenDetails) {
    this.clientId = clientId;
    this.shouldLogTokenDetails = shouldLogTokenDetails;
  }

  public String validateGoogleToken(String token) {
    GoogleIdTokenVerifier tokenVerifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
      .setAudience(singletonList(clientId))
      .build();

    try {
      GoogleIdToken idToken = tokenVerifier.verify(token);
      if (idToken != null) {
        Payload payload = idToken.getPayload();
        String userId = payload.getSubject();

        if (shouldLogTokenDetails) {
          logTokenPayloadDetails(payload, userId);
        }
      } else {
        logger.error("Invalid ID token! token={}", token);
      }
    }
    catch (GeneralSecurityException e) {
      logger.error("Security Exception Occurred!", e);
    }
    catch (IOException e) {
      logger.error("IOException Occurred!", e);
    }

    // TODO: This just turns right around and returns the same token we were given. In the future this should be a new token minted by the backend.
    return token;
  }

  private void logTokenPayloadDetails(Payload payload, String userId) {
    logger.debug("User Token Information: userId={}, email={}, emailVerified={}, name={}, pictureUrl={}, " +
                   "locale={}, familyName={}, givenName={}",
                 userId, payload.getEmail(), payload.getEmailVerified(),
                 (String) payload.get("name"), (String) payload.get("picture"), (String) payload.get("locale"),
                 (String) payload.get("family_name"), (String) payload.get("given_name"));
  }
*/
}
