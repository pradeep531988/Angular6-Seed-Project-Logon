import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() { }

    log(msg: string): any {
        if (!environment.production) {
            console.log(msg);
        }
        else {
            // Endpoint
        }

    }

    logError(msg: string): any {
        if (!environment.production) {
            console.error(msg);
        }
        else {
            // Endpoint
        }

    }

}
