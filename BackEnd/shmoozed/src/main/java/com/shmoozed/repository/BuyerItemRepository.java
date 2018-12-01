package com.shmoozed.repository;

import java.util.List;

import com.shmoozed.model.BuyerItem;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface BuyerItemRepository extends CrudRepository<BuyerItem, Integer> {

  Iterable<BuyerItem> findBuyerItemsByUserId(int userId);
  Iterable<BuyerItem> findAllByItemId(int itemId);

  @Query(value = "SELECT Item_Id, COUNT(Item_Id) from Buyer_Items group by Item_Id Order by Count(Item_Id) desc limit 5", nativeQuery = true)
  List<Object[]> getTopItemsByBuyerItemCount();
}
