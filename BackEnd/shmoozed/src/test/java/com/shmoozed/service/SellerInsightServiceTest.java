package com.shmoozed.service;

  import java.math.BigDecimal;
  import java.util.ArrayList;
  import java.util.List;
  import com.shmoozed.model.BuyerItem;
  import com.shmoozed.model.DemandPricevsRevenueDataPoint;
  import com.shmoozed.repository.BuyerItemRepository;
  import org.junit.Before;
  import org.junit.Test;
  import org.mockito.InjectMocks;
  import org.mockito.Mock;
  import static org.junit.Assert.assertEquals;
  import static org.mockito.Mockito.when;
  import static org.mockito.MockitoAnnotations.initMocks;

public class SellerInsightServiceTest {

  @InjectMocks
  private SellerInsightService fixture;

  @Mock
  private BuyerItemRepository mockBuyerItemRepository;

  @Before
  public void setUp() {
    initMocks(this);
  }

  @Test
  public void getAllRevenueByBuyerItemId() {
    int ItemId = 1;

    List<BuyerItem> buyerItemList = new ArrayList<>();

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(1), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(1), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(1), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(1), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(1), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(2), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(3), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(3), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(3), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(4), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(4), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(4), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(4), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(4), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(5), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(5), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(5), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(5), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(6), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(7), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(8), 1));

    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));
    buyerItemList.add(new BuyerItem(1, ItemId, new BigDecimal(9), 1));

    when(mockBuyerItemRepository.findAllByItemId(ItemId)).thenReturn(buyerItemList);

    DemandPricevsRevenueDataPoint dp001 = new DemandPricevsRevenueDataPoint(1,61);
    DemandPricevsRevenueDataPoint dp002 = new DemandPricevsRevenueDataPoint(2,112);
    DemandPricevsRevenueDataPoint dp003 = new DemandPricevsRevenueDataPoint(3,138);
    DemandPricevsRevenueDataPoint dp004 = new DemandPricevsRevenueDataPoint(4,172);
    DemandPricevsRevenueDataPoint dp005 = new DemandPricevsRevenueDataPoint(5,190);
    DemandPricevsRevenueDataPoint dp006 = new DemandPricevsRevenueDataPoint(6,204);
    DemandPricevsRevenueDataPoint dp007 = new DemandPricevsRevenueDataPoint(7,196);
    DemandPricevsRevenueDataPoint dp008 = new DemandPricevsRevenueDataPoint(8,168);
    DemandPricevsRevenueDataPoint dp009 = new DemandPricevsRevenueDataPoint(9,54);

    List<DemandPricevsRevenueDataPoint> listOfAnswers = new ArrayList<>();

    listOfAnswers.add(dp001);
    listOfAnswers.add(dp002);
    listOfAnswers.add(dp003);
    listOfAnswers.add(dp004);
    listOfAnswers.add(dp005);
    listOfAnswers.add(dp006);
    listOfAnswers.add(dp007);
    listOfAnswers.add(dp008);
    listOfAnswers.add(dp009);

    List<DemandPricevsRevenueDataPoint> results = fixture.getAllRevenueByBuyerItemId(ItemId);

    assertEquals(listOfAnswers,results);
  }
}