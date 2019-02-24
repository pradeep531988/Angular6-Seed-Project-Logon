import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BusinessLoginRoutingModule } from './business-login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, BusinessLoginRoutingModule ],
  declarations: [ BusinessLoginRoutingModule.components ],
})
export class BusinessLoginModule {}
