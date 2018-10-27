package com.shmoozed.repository;

import com.shmoozed.model.Alert;
import org.springframework.data.repository.CrudRepository;

public interface AlertRepository extends CrudRepository<Alert, Integer> {

  Iterable<Alert> findAlertsByUserId(int userId);

}
