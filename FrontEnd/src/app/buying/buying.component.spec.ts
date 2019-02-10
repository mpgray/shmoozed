import { BuyingService } from './buying.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BuyingComponent } from './buying.component';
import { BuyerItem } from '../models/buyer-item';
import { of } from 'rxjs';

describe('BuyingComponent', () => {
    let mockBuyingService: any;
    let mockMatDialog: MatDialog;
    let buyingComponent: BuyingComponent;
    let mockSnackBar: MatSnackBar;

    beforeEach(() => {
        mockBuyingService = jasmine.createSpyObj(['getBuyerItems']);
        mockMatDialog = jasmine.createSpyObj(['open']);
        mockSnackBar = jasmine.createSpyObj([]);
        const restService = jasmine.createSpyObj([]);
        buyingComponent = new BuyingComponent(mockBuyingService, restService, mockMatDialog, mockSnackBar);
    });


    it('should call the BuyingService.getbuyerItems() upon init', () => {
        mockBuyingService.getBuyerItems.and.returnValue(of(BuyerItem));

        buyingComponent.ngOnInit();

        expect(mockBuyingService.getBuyerItems).toHaveBeenCalled();
    });
});
