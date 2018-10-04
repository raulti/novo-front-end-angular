import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { UserService } from '../layout/user/user.service';
import { NotificationService } from '../shared/services/notification.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(public router: Router, public userService: UserService, private _notification: NotificationService) { }

    public user: any = {};

    ngOnInit() { }

    public onLoggedin(form) {
        this.userService.login(form.value).subscribe(data => {
        }, data => {
            if (data.status == 200) {
                sessionStorage.setItem('isLoggedin', 'true');
                sessionStorage.setItem('token', data.error.text);
                this.router.navigate(['/user']);
            } else if (data.status == 401) {
                this._notification.danger('Não foi possível realizar o acesso!');
            }
        });
    }
}
