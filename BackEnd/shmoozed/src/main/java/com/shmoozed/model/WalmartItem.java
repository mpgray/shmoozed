package com.shmoozed.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import static javax.persistence.GenerationType.IDENTITY;

@Entity
@Table(name = "WalmartItems")
public class WalmartItem {

  @Id
  @GeneratedValue(strategy = IDENTITY)
  @Column(name = "Walmart_Item_Id")
  private int id;



  @Column(name = "Walmart_Name")
  private String name;

  @Column(name = "Walmart_Category_Path")
  private String categoryPath;

  @Column(name = "Walmart_UPC")
  private String upc;

  @Column(name = "Walmart_MSRP")
  private double msrp;

  @Column(name = "Walmart_Sale_Price")
  private double price;

  @Column(name = "Walmart_Thumbnail_Image")
  private String thumbnail;

  @Column(name = "Walmart_Large_Image")
  private String image;

  @Column(name = "Walmart_Model_Number")
  private String model;

  @Column(name = "Walmart_Affiliate_Add_To_Cart_Url")
  private String affiliateUrl;

  @Column(name = "Walmart_Stock")
  private int stock;

  public WalmartItem() {
    // Empty default constructor. This is needed in order for JPA to work properly.
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

  public String getCategoryPath() {
    return categoryPath;
  }

  public void setCategoryPath(String categoryPath) {
    this.categoryPath = categoryPath;
  }

  public String getUpc() {
    return upc;
  }

  public void setUpc(String upc) {
    this.upc = upc;
  }

  public double getMsrp() {
    return msrp;
  }

  public void setMsrp(double msrp) {
    this.msrp = msrp;
  }

  public double getPrice() {
    return price;
  }

  public void setPrice(double price) {
    this.price = price;
  }

  public String getThumbnail() {
    return thumbnail;
  }

  public void setThumbnail(String thumbnail) {
    this.thumbnail = thumbnail;
  }

  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }

  public String getAffiliateUrl() {
    return affiliateUrl;
  }

  public void setAffiliateUrl(String affiliateUrl) {
    this.affiliateUrl = affiliateUrl;
  }

  public int getStock() {
    return stock;
  }

  public void setStock(int stock) {
    this.stock = stock;
  }
  @Override
  public String toString() {
    return "WalmartItem{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", price'" + price + '\'' +
      ", image'" + image + '\'' +
      '}';
  }



}
