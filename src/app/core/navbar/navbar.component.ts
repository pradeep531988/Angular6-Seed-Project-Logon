import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/logger.service';



@Component({
    selector: 'bnk-cm-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit, OnDestroy {

    isCollapsed: boolean;
    loginLogoutText = 'Login';
    sub: Subscription;

    constructor(private router: Router,
                private authservice: AuthService,
                private logger: LoggerService) { }

    ngOnInit() {
        this.sub = this.authservice.authChanged
            .subscribe((loggedIn: boolean) => {
                this.setLoginLogoutText();
            },
            (err: any) => this.logger.log(err));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    loginOrOut() {
        const isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe((status: boolean) => {
                    this.setLoginLogoutText();
                    this.router.navigate(['/bnksphere']);
                    return;
                },
                (err: any) => this.logger.log(err));
        }
        this.redirectToLogin();
    }

    redirectToLogin() {
        this.router.navigate(['/login']);
    }

    setLoginLogoutText() {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    }

}
