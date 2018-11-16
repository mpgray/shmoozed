package com.shmoozed.repository;

import java.util.Optional;

import com.shmoozed.model.ItemPriceHistory;
import org.springframework.data.repository.CrudRepository;

public interface ItemPriceHistoryRepository extends CrudRepository<ItemPriceHistory, Integer> {

  Optional<ItemPriceHistory> findItemPriceHistoriesByItemId(int itemId);

}
