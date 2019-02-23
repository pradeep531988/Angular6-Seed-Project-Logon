import { AbstractControl } from '@angular/forms';


export class ValidationService {

    static getValidatorErrorMessage(code: string): any{
        const config = {
            required: 'Required',
            invalidPid: 'Invalid Pid',
            invalidSecurityNo: 'Invalid security no. Security number should be 16 digit no.'
        };
        return config[code];
    }

    static pidValidator(control: AbstractControl): any{
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { invalidPid : true };
        }
    }

    static securityValidator(control: AbstractControl): any {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        } else {
            return { invalidSecurityNo: true };
        }
    }
}
