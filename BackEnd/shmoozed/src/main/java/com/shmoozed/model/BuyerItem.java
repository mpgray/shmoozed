package com.shmoozed.model;

import java.math.BigDecimal;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Represents a set of items which a Buyer is looking to purchase.
 */
@Entity
@Table(name = "Buyer_Items")
public class BuyerItem {

  @Id
  @GeneratedValue(strategy = IDENTITY)
  @Column(name = "Buyer_Item_Id")
  private int id;

  @Column(name = "Item_Id")
  private int itemId;

  @Column(name = "Price")
  private BigDecimal price;

  @Column(name = "User_Id")
  private int userId;

  public BuyerItem() {
    // Empty default constructor. This is needed in order for JPA to work properly.
  }

  public BuyerItem(int id, int itemId, BigDecimal price, int userId) {
    this.id = id;
    this.itemId = itemId;
    this.price = price;
    this.userId = userId;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getItemId() {
    return itemId;
  }

  public void setItemId(int itemId) {
    this.itemId = itemId;
  }

  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  @Override
  public String toString() {
    return "BuyerItem{" +
      "id=" + id +
      ", itemId=" + itemId +
      ", price=" + price +
      ", userId=" + userId +
      '}';
  }
}
