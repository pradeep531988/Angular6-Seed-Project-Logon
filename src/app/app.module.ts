import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './modules/p-login/login.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BusinessLoginModule } from './modules/b-login/business-login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,         // Shared (multi-instance) objects
    LoginModule,          // Eager loaded since we may need to go here right away as browser loads based on route user enters
    CoreModule,           // Singleton objects (services, components that are loaded only once, etc.)
    NgbModule.forRoot(),
    AppRoutingModule     // Main routes for application
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
