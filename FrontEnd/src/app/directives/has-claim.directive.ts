import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { UserAuthentication } from '../models/user-authentication';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hasClaim]'
})
export class HasClaimDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set hasClaim(claimType: any) {
    const userObject = localStorage.getItem('user');
    if (!userObject) {
      this.viewContainer.clear();
    } else if (this.securityObjectHasClaim(claimType, JSON.parse(userObject))) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  securityObjectHasClaim(claim: string, securityObject: UserAuthentication) {
    if (securityObject === null) {
      return false;
    }
    const matchingClaim = securityObject.roles.find(x => x === claim);
    if (matchingClaim === undefined) {
      return false;
    }
    return true;
  }
}
