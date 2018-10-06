package com.shmoozed.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

  @GetMapping("/example/{someId}")
  public String getExample(@PathVariable Long someId) {
    return "This was the ID sent to me: " + someId;
  }

}
