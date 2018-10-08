package com.shmoozed.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Represents an Item which a Seller might be selling or an Item which a Buyer might
 * be buying.
 */
@Entity
public class Item {

  @Id
  @GeneratedValue(strategy = IDENTITY)
  private int id;
  private String name;
  private int quantity;

  public Item(int id, String name, int quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  @Override
  public String toString() {
    return "Item{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", quantity=" + quantity +
      '}';
  }
}
