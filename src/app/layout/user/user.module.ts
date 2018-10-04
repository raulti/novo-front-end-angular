import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { PageHeaderModule } from './../../shared';
import { UserService } from './user.service';
import { FormComponent } from './form/form.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
    imports: [CommonModule, UserRoutingModule, PageHeaderModule, FormsModule, ConfirmationPopoverModule],
    declarations: [UserComponent, FormComponent],
    providers: [
        UserService
      ]
})
export class UserModule {}
