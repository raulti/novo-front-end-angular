import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './user.service';
import { routerTransition } from '../../router.animations';
import { NotificationService } from '../../shared/services/notification.service';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    animations: [routerTransition()]
})


export class UserComponent implements OnInit {

    public users: any = {};
    public popoverTitle: string = '<strong>Remover usuário</strong>';
    public popoverMessage: string = 'Você realmente deseja remover este usuário?';
    confirmText: string = 'Sim';
    cancelText: string = 'Não';
    
    constructor(public router: Router, private _userService: UserService, private _notification: NotificationService) { }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers() {

        this._userService.getUsers().subscribe(data => {
            this.users = data;
            this.setRoles();
        }, error => {
            this._notification.danger('Erro ao listar usuários');
        });
    }

    public setRoles() {
        this.users.forEach(user => {
            user.roles = user.roles[0];
        });
    }

    public delete(user) {
        this._userService.remove(user.id).subscribe(data => {
            this.deleteUserList(user.id);
            this._notification.success('Usuário removido com sucesso!');
        }, error => {
            this._notification.danger('Erro ao remover usuário!');
        });
    }

    public deleteUserList(id) {
        this.users = this.users.filter(
            user => user.id != id);
    }

    public edit(user){
        this._userService.setUser(user);
        this.router.navigate(['/user/form/' + user.id]);
    }
}
