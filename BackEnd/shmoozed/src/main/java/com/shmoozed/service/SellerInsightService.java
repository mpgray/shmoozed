package com.shmoozed.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

  public List<DemandPricevsRevenueDataPoint> getAllRevenueByItemId(int itemId) {
    logger.debug("Fetching all Price v Revenue Data");
    return calculatePricevsRevenue(
      doubleArrayFromBuyerItems(
        (List<BuyerItem>) buyerItemRepository.findAllByItemId(itemId)
      )
    );
  }


  /**
   * Takes in List of buyerItems,
   * extracts the price as a double (money friendly),
   * puts into double array,
   * sorts it, returns it
   */
  private double[] doubleArrayFromBuyerItems(List<BuyerItem> list){
    double[] daToReturn = new double[list.size()];

    for(int i = 0; i < list.size(); i++) {
      daToReturn[i] = roundDoubleToMoney(list.get(i).getPrice().doubleValue());
    }

    Arrays.sort(daToReturn);

    return daToReturn;
  }

  /**
   * Returns full list of DemandPrice vs Revenue
   * Assumes input double array already has valid money values and is sorted
   */
  private List<DemandPricevsRevenueDataPoint> calculatePricevsRevenue(double[] daOfDemandedPrices) {
    //for speed (porque es muy rapido)
    HashMap<Double,Double> hmOfDemandPriceAndRevenues = new HashMap();

    double demand, revenue;

    for (int i = 0; i < daOfDemandedPrices.length; i++) {
      demand = daOfDemandedPrices[i];
      revenue = roundDoubleToMoney((daOfDemandedPrices.length - i)*demand);

      if(hmOfDemandPriceAndRevenues.containsKey(demand)) {
        if(hmOfDemandPriceAndRevenues.get(demand) < revenue) {
          hmOfDemandPriceAndRevenues.replace(demand,revenue);
        }
      }
      else {
        hmOfDemandPriceAndRevenues.put(demand,revenue);
      }
    }

    //revenues to list
    List<DemandPricevsRevenueDataPoint> listToReturn = new ArrayList<>();

    for (Map.Entry<Double,Double> e:hmOfDemandPriceAndRevenues.entrySet()) {
      listToReturn.add(new DemandPricevsRevenueDataPoint(e.getKey(),e.getValue()));
    }

    //sort list to return
    //not needed, but funsies
    Comparator<DemandPricevsRevenueDataPoint> comparator = new Comparator<DemandPricevsRevenueDataPoint>() {
      @Override
      public int compare(DemandPricevsRevenueDataPoint o1, DemandPricevsRevenueDataPoint o2) {
        return (int) (o1.getDemandPrice() - o2.getDemandPrice());
      }
    };
    listToReturn.sort(comparator);

    return listToReturn;
  }

  private double roundDoubleToMoney(double d) {
    return (Math.round(d*100))/100.0;
  }

}
