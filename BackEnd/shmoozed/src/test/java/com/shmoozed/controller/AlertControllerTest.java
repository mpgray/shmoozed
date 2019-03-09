package com.shmoozed.controller;

import java.sql.Timestamp;
import java.time.Instant;

import com.shmoozed.model.Alert;
import com.shmoozed.service.AlertService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static java.util.Arrays.asList;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class AlertControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private AlertService mockAlertService;


  @Test
  public void getAlertByUserId_AlertFound() throws Exception {
    Instant now = Instant.now();
    Timestamp rightNow = Timestamp.from(now);
    String formattedNowString = now.toString().replace("Z", "+0000");

    Alert alert1 = new Alert(1, 2, 3, rightNow, 4);
    Alert alert2 = new Alert(5, 6, 7, rightNow, 8);

   // when(mockAlertService.getAlertsByUserId(4)).thenReturn(asList(alert1, alert2));

    mockMvc.perform(get("/alert?userId=4").header("Authorization", "ImALittleTeapot"))
      .andDo(print())
      .andExpect(status().isOk())
      .andExpect(content().json("[{\"id\":1,\"buyerItemId\":2,\"sellerItemId\":3," +
                                  "\"lastUpdateDate\":\"" + formattedNowString + "\",\"userId\":4}" +
                                  ",{\"id\":5,\"buyerItemId\":6,\"sellerItemId\":7," +
                                  "\"lastUpdateDate\":\"" + formattedNowString + "\",\"userId\":8}]"));
  }

  @Test
  public void getAlertByUserId_AlertNotFound() throws Exception {
    when(mockAlertService.getAlertsByUserId(4)).thenReturn(asList());
    mockMvc.perform(get("/alert?userId=0").header("Authorization", "ImALittleTeapot"))
      .andDo(print())
      .andExpect(status().isNotFound())
      .andExpect(content().string(""));
  }



}
