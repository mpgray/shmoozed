package com.shmoozed.repository;

import com.shmoozed.model.BuyerItem;
import org.springframework.data.repository.CrudRepository;

public interface BuyerItemRepository extends CrudRepository<BuyerItem, Integer> {

  Iterable<BuyerItem> findBuyerItemsByUserId(int userId);

}
