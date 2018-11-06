package com.shmoozed.controller;

import com.shmoozed.model.UserAuthorizations;
import com.shmoozed.model.UserRoles;
import com.shmoozed.service.GoogleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import static java.util.Arrays.asList;

@CrossOrigin // Allow All CORS Requests. See https://spring.io/blog/2015/06/08/cors-support-in-spring-framework
@RestController
@RequestMapping(path = "/user")
public class UserController {

  private Logger logger = LoggerFactory.getLogger(UserController.class);

  private GoogleService googleService;

  @Autowired
  public UserController(GoogleService googleService) {
    this.googleService = googleService;
  }

  /**
   * Attempts to authenticate a user using the provided token (created externally from Google). It first
   * validates the token with Google. A {@link UserAuthorizations} object is returned to the caller. This
   * objects contains a new token, which the caller should use on all subsequent calls to any API request,
   * along with a list of {@link UserRoles} which the user has. The caller can use this, for example, to
   * enable/disable feature sets, etc.
   *
   * Expects the token to be passed in via an {@code Authorization} header.
   *
   * @param token The JWS token created by Google's Authentication Service
   * @return The {@link UserAuthorizations} for the now authenticated user
   */
  @GetMapping("/authorization")
  public @ResponseBody
  ResponseEntity<UserAuthorizations> getUserAuthorizations(@RequestHeader("Authorization") String token) {
    logger.debug("Request to get authorizations. token={}", token);

    String newToken = googleService.validateGoogleToken(token);

    UserAuthorizations userAuthorizations = new UserAuthorizations(newToken, asList(UserRoles.BUYER, // TODO: These are hardcoded to always return all the roles
                                                                                    UserRoles.SELLER,
                                                                                    UserRoles.ADMIN));

    return new ResponseEntity<>(userAuthorizations, HttpStatus.OK);
  }

}
