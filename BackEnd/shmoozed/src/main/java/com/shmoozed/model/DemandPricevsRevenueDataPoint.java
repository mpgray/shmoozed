package com.shmoozed.model;

public class DemandPricevsRevenueDataPoint {
  private double demandPrice;
  private double revenue;

  public double getDemandPrice() {
    return demandPrice;
  }

  public void setDemandPrice(double demandPrice) {
    this.demandPrice = demandPrice;
  }

  public double getRevenue() {
    return revenue;
  }

  public void setRevenue(double revenue) {
    this.revenue = revenue;
  }

  public DemandPricevsRevenueDataPoint(double demandPrice, double revenue) {
    this.demandPrice = demandPrice;
    this.revenue = revenue;
  }

  @Override
  public String toString() {
    return "DemandPricevsRevenueDataPoint{" +
      "demandPrice=" + demandPrice +
      ", revenue=" + revenue +
      '}';
  }

}
