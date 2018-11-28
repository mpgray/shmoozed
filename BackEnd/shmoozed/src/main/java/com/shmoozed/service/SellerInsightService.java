package com.shmoozed.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.shmoozed.model.BuyerItem;
import com.shmoozed.model.DemandPricevsRevenueDataPoint;
import com.shmoozed.repository.BuyerItemRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerInsightService {
  private Logger logger = LoggerFactory.getLogger(SellerInsightService.class);

  private final BuyerItemRepository buyerItemRepository;

  @Autowired
  public SellerInsightService(BuyerItemRepository buyerItemRepository) {
    this.buyerItemRepository = buyerItemRepository;
  }

  public List<DemandPricevsRevenueDataPoint> getAllRevenueByBuyerItemId(int buyerItemId) {
    logger.debug("Fetching all Price v Revenue Data");
    return (List<DemandPricevsRevenueDataPoint>) calculatePricevsRevenue();
  }

  private List<DemandPricevsRevenueDataPoint> calculatePricevsRevenue() {
    //input array
    double[] daOfDemandedPrices = null; //todo: fix not null

    //for speed (porque es muy rapido)
    HashMap<Double,Double> hmOfDemandPriceAndRevenues = new HashMap();

    //make array have all valid money values
    //taken care of in random generation todo: not here it's not

    //sort input array
    Arrays.sort(daOfDemandedPrices);

    double demand, revenue;

    for (int i = 0; i < daOfDemandedPrices.length; i++)
    {
      demand = daOfDemandedPrices[i];
      revenue = roundDoubleToMoney((daOfDemandedPrices.length - i)*demand);

      if(hmOfDemandPriceAndRevenues.containsKey(demand))
      {
        if(hmOfDemandPriceAndRevenues.get(demand) > revenue)
        {
          hmOfDemandPriceAndRevenues.replace(demand,revenue);
        }
      }
      else
      {
        hmOfDemandPriceAndRevenues.put(demand,revenue);
      }
    }

    //revenues to list
    List<DemandPricevsRevenueDataPoint> listToReturn = new ArrayList<>();

    for (Map.Entry<Double,Double> e:hmOfDemandPriceAndRevenues.entrySet()) {
      listToReturn.add(new DemandPricevsRevenueDataPoint(e.getKey(),e.getValue()));
    }

    return listToReturn;
  }

  private double roundDoubleToMoney(double d)
  {
    return (Math.round(d*100))/100.0;
  }

}
