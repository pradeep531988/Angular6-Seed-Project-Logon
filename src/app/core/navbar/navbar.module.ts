import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, RouterModule],
  declarations: [NavbarComponent],
})
export class NavBarModule extends EnsureModuleLoadedOnceGuard {    // Ensure that ModalModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: NavBarModule) {
    super(parentModule);
  }

}
