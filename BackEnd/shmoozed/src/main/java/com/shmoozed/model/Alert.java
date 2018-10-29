package com.shmoozed.model;

import java.sql.Timestamp;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static javax.persistence.GenerationType.IDENTITY;

/**
 * Represents an Alert which will be used for notification to a Buyer or Seller.
 */
@Entity
@Table(name = "Alerts")
public class Alert {

  @Id
  @GeneratedValue(strategy = IDENTITY)
  @Column(name = "Alert_Id")
  private int id;

  @Column(name = "Buyer_Item_Id")
  private int buyerItemId;

  @Column(name = "Seller_Item_Id")
  private int sellerItemId;

  @Column(name = "Last_Update_Date")
  private Timestamp lastUpdateDate;

  @Column(name = "User_Id")
  private int userId;

  public Alert() {
    // Empty default constructor. This is needed in order for JPA to work properly.
  }

  public Alert(int id, int buyerItemId, int sellerItemId, Timestamp lastUpdateDate,
               int userId) {
    this.id = id;
    this.buyerItemId = buyerItemId;
    this.sellerItemId = sellerItemId;
    this.lastUpdateDate = lastUpdateDate;
    this.userId = userId;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public int getBuyerItemId() {
    return buyerItemId;
  }

  public void setBuyerItemId(int buyerItemId) {
    this.buyerItemId = buyerItemId;
  }

  public int getSellerItemId() {
    return sellerItemId;
  }

  public void setSellerItemId(int sellerItemId) {
    this.sellerItemId = sellerItemId;
  }

  public Timestamp getLastUpdateDate() {
    return lastUpdateDate;
  }

  public void setLastUpdateDate(Timestamp lastUpdateDate) {
    this.lastUpdateDate = lastUpdateDate;
  }

  public int getUserId() {
    return userId;
  }

  public void setUserId(int userId) {
    this.userId = userId;
  }

  @Override
  public String toString() {
    return "Alert{" +
      "id=" + id +
      ", buyerItemId=" + buyerItemId +
      ", sellerItemId=" + sellerItemId +
      ", lastUpdateDate=" + lastUpdateDate +
      ", userId=" + userId +
      '}';
  }
}
