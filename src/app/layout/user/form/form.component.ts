import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { UserService } from '../user.service';
import { NotificationService } from '../../../shared/services/notification.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()]
})
export class FormComponent implements OnInit {

  public static ADMIN = 'ADMIN';
  public static USER = 'USER';

  public user: any = {};
  public inputName: '';
  public inputUsername: '';
  public inputPassword: '';
  public inputEmail: '';
  public inputRole: '';
  public inputId = '';
  public roles = [FormComponent.ADMIN, FormComponent.USER];

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private _userService: UserService,
    private _notification: NotificationService
  ) { }

  ngOnInit() {
    this.makeEditForm();
  }

  public makeEditForm() {
    this.inputId = null;
    
    this.route.params.subscribe(params => {
      if (params['id']) {
        let user = this._userService.getUser();
        this.inputName = user.name;
        this.inputUsername = user.username;
        this.inputEmail = user.email;
        this.inputRole = user.roles;
        this.inputId = user.id;
      }
    });
  }

  public save(form) {
    this.user = form.value;
    this.makeRoles()
    this._userService.save(this.user).subscribe(data => {
      this._notification.success('Novo usuário criado com sucesso.');
      this.router.navigate(['/user']);
    }, error => {
      this._notification.danger('Erro ao salvar novo usuário!');
    });
  }

  public makeRoles() {
    this.user.roles = this.user.role == FormComponent.ADMIN ? [FormComponent.ADMIN, FormComponent.USER] : [FormComponent.USER];
  }
}
