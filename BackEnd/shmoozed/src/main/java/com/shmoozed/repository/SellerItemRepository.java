package com.shmoozed.repository;

import com.shmoozed.model.SellerItem;
import org.springframework.data.repository.CrudRepository;

public interface SellerItemRepository extends CrudRepository<SellerItem, Integer> {

  Iterable<SellerItem> findSellerItemsByUserId(int userId);

}
