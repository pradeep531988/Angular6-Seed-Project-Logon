import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header.component';
import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';


@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class HeaderModule extends EnsureModuleLoadedOnceGuard {    // Ensure that HeaderModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: HeaderModule) {
    super(parentModule);
  }
}
