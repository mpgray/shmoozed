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
  private int itemId;

  @Column(name = "Walmart_Name")
  private String name;

  @Column(name = "Walmart_Category_Path")
  private String categoryPath;

  @Column(name = "Walmart_UPC")
  private String upc;

  @Column(name = "Walmart_MSRP")
  private double msrp;

  @Column(name = "Walmart_Sale_Price")
  private double salePrice;

  @Column(name = "Walmart_Thumbnail_Image")
  private String thumbnailImage;

  @Column(name = "Walmart_Large_Image")
  private String largeImage;

  @Column(name = "Walmart_Model_Number")
  private String modelNumber;

  @Column(name = "Walmart_Affiliate_Add_To_Cart_Url")
  private String affiliateAddToCartUrl;

  @Column(name = "Walmart_Stock")
  private String stock;

  public WalmartItem() {
    // Empty default constructor. This is needed in order for JPA to work properly.
  }

  public int getItemId() {
    return itemId;
  }

  public void setItemId(int itemId) {
    this.itemId = itemId;
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

  public void setCategoryPath(String categoryPath1) {
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

  public double getSalePrice() {
    return salePrice;
  }

  public void setSalePrice(double salePrice) {
    this.salePrice = salePrice;
  }

  public String getThumbnailImage() {
    return thumbnailImage;
  }

  public void setThumbnailImage(String thumbnailImage) {
    this.thumbnailImage = thumbnailImage;
  }

  public String getLargeImage() {
    return largeImage;
  }

  public void setLargeImage(String largeImage) {
    this.largeImage = largeImage;
  }

  public String getModelNumber() {
    return modelNumber;
  }

  public void setModelNumber(String modelNumber) {
    this.modelNumber = modelNumber;
  }

  public String getAffiliateAddToCartUrl() {
    return affiliateAddToCartUrl;
  }

  public void setAffiliateAddToCartUrl(String affiliateAddToCartUrl) {
    this.affiliateAddToCartUrl = affiliateAddToCartUrl;
  }

  public String getStock() {
    return stock;
  }

  public void setStock(String stock) {
    this.stock = stock;
  }

  @Override
  public String toString() {
    return "WalmartItem{" +
      "itemId=" + itemId +
      ", name='" + name + '\'' +
      ", categoryPath1='" + categoryPath + '\'' +
      ", upc='" + upc + '\'' +
      ", msrp=" + msrp +
      ", salePrice=" + salePrice +
      ", thumbnailImage='" + thumbnailImage + '\'' +
      ", largeImage='" + largeImage + '\'' +
      ", modelNumber='" + modelNumber + '\'' +
      ", affiliateAddToCartUrl='" + affiliateAddToCartUrl + '\'' +
      ", stock='" + stock + '\'' +
      '}';
  }
}
