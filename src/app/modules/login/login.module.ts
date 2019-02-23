import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule, LoginRoutingModule ],
  declarations: [ LoginRoutingModule.components ],
})
export class LoginModule { }
