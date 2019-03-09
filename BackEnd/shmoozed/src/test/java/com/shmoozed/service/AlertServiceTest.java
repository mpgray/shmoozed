package com.shmoozed.service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.shmoozed.model.Alert;
import com.shmoozed.repository.AlertRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

public class AlertServiceTest {

  @InjectMocks
  private AlertService fixture;

  @Mock
  private AlertRepository mockAlertRepository;

  @Before
  public void setUp() {
    initMocks(this);
  }

  @Test
  public void getAlertByUserId_Found() {
//    List<Alert> alerts = new ArrayList<>();
//    Alert alert1 = new Alert(999999999, 2, 3, Timestamp.valueOf("2016-11-16 06:43:19.77"), 4);
//    Alert alert2 = new Alert(111111111, 3, 4, Timestamp.valueOf("2016-11-16 06:43:19.77"), 4);
//    alerts.add(alert1);
//    alerts.add(alert2);
//    when(mockAlertRepository.findAlertsByUserId(4)).thenReturn(alerts);
//
//    List<Alert> results = fixture.getAlertsByUserId(4);
//
//    assertThat(results.size(), is(2));
//    assertThat(results.contains(alert1), is(true));
//    assertThat(results.contains(alert2), is(true));
  }

  @Test
  public void getAlertByUserId_NotFound() {
    when(mockAlertRepository.findById(anyInt())).thenReturn(Optional.empty());

  //  List<Alert> results = fixture.getAlertsByUserId(12345);

   // assertThat(results.isEmpty(), is(true));
  }


  @Test
  public void insertNewAlert() {
    Alert newAlert = new Alert(1, 2, 3, Timestamp.valueOf("2016-11-16 06:43:19.77"), 4);

    when(mockAlertRepository.save(newAlert)).thenReturn(new Alert(1, 2, 3, Timestamp.valueOf("2016-11-16 06:43:19.77"), 4));

    Alert results = fixture.insertNewAlert(newAlert);

    verify(mockAlertRepository).save(newAlert);
    assertThat(results, samePropertyValuesAs(newAlert));
  }

}