import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, LoginRoutingModule ],
  declarations: [ LoginRoutingModule.components ],
})
export class LoginModule { }
