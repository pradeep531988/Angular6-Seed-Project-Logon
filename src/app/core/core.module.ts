import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ModalModule } from './modal/modal.module';
import { OverlayModule } from './overlay/overlay.module';

import { NavbarComponent } from './navbar/navbar.component';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { EventBusService } from './services/event-bus.service';
import { LoggerService } from './services/logger.service';
import { AuthService } from './services/auth.service';
import { HeaderModule } from './header/header.module';
import { NavBarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  imports: [CommonModule, RouterModule, HttpClientModule, ModalModule, OverlayModule],
  exports: [ RouterModule, HttpClientModule, ModalModule,  OverlayModule, NavBarModule, HeaderModule, FooterModule],
  providers: [ EventBusService, LoggerService, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}



