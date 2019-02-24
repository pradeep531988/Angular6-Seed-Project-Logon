import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IUserLogin } from '../../shared/interfaces/common-interfaces';
import { ValidationService } from '../../core/services/validation.service';
import { LoggerService } from '../../core/services/logger.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'bnk-b-login',
    templateUrl: './business-login.component.html',
    styleUrls: [ './business-login.component.scss' ]
})
export class BusinessLoginComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage: string;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private authService: AuthService,
                private logger: LoggerService) { }

    ngOnInit() {
        this.buildForm();
    }

    buildForm() {
        this.loginForm = this.formBuilder.group({
            pid:      ['', [ Validators.required, ValidationService.pidValidator ]],
            securityId:   ['', [ Validators.required, ValidationService.securityValidator ]]
        });
    }

    submit({ value, valid }: { value: IUserLogin, valid: boolean }) {
        this.authService.login(value)
            .subscribe((status: boolean) => {
                if (status) {
                    if (this.authService.redirectUrl) {
                        const redirectUrl = this.authService.redirectUrl;
                        this.authService.redirectUrl = '';
                        this.router.navigate([redirectUrl]);
                    } else {
                        this.router.navigate(['/customers']);
                    }
                } else {
                    const loginError = 'Unable to login';
                    this.errorMessage = loginError;
                }
            },
            (err: any) => this.logger.log(err));
    }

}
