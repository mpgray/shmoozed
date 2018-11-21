package com.shmoozed.repository;

import com.shmoozed.model.WalmartItem;
import org.springframework.data.repository.CrudRepository;

public interface WalmartRepository extends CrudRepository<WalmartItem, Integer> {

}