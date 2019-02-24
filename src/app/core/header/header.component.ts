import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoggerService } from '../services/logger.service';



@Component({
    selector: 'bnk-cm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

    sub: Subscription;

    constructor(private router: Router,
                private logger: LoggerService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

   
    redirectToLogin() {
        this.router.navigate(['/login']);
    }


}
