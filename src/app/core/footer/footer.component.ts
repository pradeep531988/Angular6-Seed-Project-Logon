import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoggerService } from '../services/logger.service';



@Component({
    selector: 'bnk-cm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

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
