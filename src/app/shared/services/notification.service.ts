import { Injectable } from '@angular/core';
import { NgxNotifierService } from 'ngx-notifier';

@Injectable()
export class NotificationService {

    constructor(private _notification: NgxNotifierService) { }

    public success(msg) {
        this.createToast(msg, 'success');
    }

    public danger(msg) {
        this.createToast(msg, 'danger');
    }

    public warning(msg) {
        this.createToast(msg, 'warning');
    }

    public info(msg) {
        this.createToast(msg, 'info');
    }

    public createToast(msg, style) {
        this._notification.createToast(msg, style, 9000);
    }
}
