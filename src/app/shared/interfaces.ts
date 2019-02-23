import { ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';

export interface IUserLogin {
    pid: string;
    password: string;
    securityNo: string;
}

export interface IUserDetails {
    status: boolean;
    error?: string;
}
