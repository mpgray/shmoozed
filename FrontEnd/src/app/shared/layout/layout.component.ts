import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AccountComponent, DialogData} from '../../account/account.component';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../../account/login/login.component';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  @ViewChild('AccountComponent') account: AccountComponent;
  mobileQuery: MediaQueryList;
  emailMessages = 13;
  alertMessages = 20;
  private readonly _mobileQueryListener: () => void;
  searchValue = 'Clear me';
  name: string;

  constructor(public dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 750px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openLogin() {
    this.dialog.open(LoginComponent, {
      data: {

      }
    });
  }
}


