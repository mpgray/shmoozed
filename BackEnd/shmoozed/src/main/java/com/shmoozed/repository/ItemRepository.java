package com.shmoozed.repository;

import com.shmoozed.model.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer> {

  /**
   * Answers with all items which match the partial name provided.
   *
   * Note that there is no implementation for this method. By extending from {@link CrudRepository} we enter
   * the "JPA" and "Spring Data" realm where it is implementing it behind the scenes for us automatically.
   *
   * @param partialName The part of the name to use when identifying matching items
   * @return An Iterable of {@link Item} which matched the provided partial name
   */
  Iterable<Item> findItemsByNameContaining(String partialName);

}
