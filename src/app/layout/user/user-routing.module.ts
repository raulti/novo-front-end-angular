import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', component: UserComponent },
    { path: 'form', component: FormComponent },
    { path: 'form/:id', component: FormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
