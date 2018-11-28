import { BuyingService } from './buying.service';
import { MatDialog } from '@angular/material';
import { BuyingComponent } from './buying.component';
import { BuyerItem } from '../models/buyer-item';
import { of } from 'rxjs';

describe('BuyingComponent', () => {
    let mockBuyingService: any;
    let mockMatDialog: MatDialog;
    let buyingComponent: BuyingComponent;

    beforeEach(() => {
        mockBuyingService = jasmine.createSpyObj(['getBuyerItems']);
        mockMatDialog = jasmine.createSpyObj(['open']);
        buyingComponent = new BuyingComponent(mockBuyingService, mockMatDialog);
    });


    it('should call the BuyingService.getbuyerItems() upon init', () => {
        mockBuyingService.getBuyerItems.and.returnValue(of(BuyerItem));

        buyingComponent.ngOnInit();

        expect(mockBuyingService.getBuyerItems).toHaveBeenCalled();
    });

    it('should call MatDialog.open when the View Price History button is clicked', () => {
        buyingComponent.openPriceHistoryDialog({});

        expect(mockMatDialog.open).toHaveBeenCalled();
    });
});
