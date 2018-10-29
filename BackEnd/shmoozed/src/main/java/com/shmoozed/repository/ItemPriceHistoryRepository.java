package com.shmoozed.repository;

import com.shmoozed.model.ItemPriceHistory;
import org.springframework.data.repository.CrudRepository;

public interface ItemPriceHistoryRepository extends CrudRepository<ItemPriceHistory, Integer> {

  Iterable<ItemPriceHistory> findItemPriceHistoriesByItemId(int itemId);

}
