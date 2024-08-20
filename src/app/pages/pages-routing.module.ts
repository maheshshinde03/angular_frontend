import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { InlineEditingComponent } from '../shared/reusableComponents/reusable-table/inline-editing/inline-editing.component';
import { InlineEditingReactiveFormComponent } from '../shared/reusableComponents/reusable-table/inline-editing-reactive-form/inline-editing-reactive-form.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { StepperFormComponent } from '../shared/reusableComponents/reusable-form/stepper-form/stepper-form.component';
import { DynamicFormComponent } from '../shared/reusableComponents/reusable-form/form-with-json/dynamic-form/dynamic-form.component';
import { ContentProjectionFormComponent } from '../shared/reusableComponents/reusable-form/form-content-projection/content-projection-form/content-projection-form.component';
import { ResuableFormConfigComponent } from '../shared/reusableComponents/reusable-form/form-with-config/resuable-form-config/resuable-form-config.component';
import { UserResolverService } from '../core/resolver/user-resolver.service';

const routes: Routes = [
  
    // { path: 'auth', loadChildren: () => import('../modules/auth/auth.module').then(m => m.AuthModule) },

    {path: 'users-list', component: UsersListComponent,  
      resolve:{
      userList: UserResolverService      // getting data with resolve
    }},
    {path: 'inline-editing', component: InlineEditingComponent},
    {path: 'table-inline-reactive-form', component: InlineEditingReactiveFormComponent},
    {path: 'custom-directive', component: CustomDirectiveComponent},
    {path: 'stepper-form', component: StepperFormComponent},
    {path: 'reusable-form-json', component: DynamicFormComponent},
    {path: 'form-content-projection', component: ContentProjectionFormComponent},
    {path: 'form-with-config', component: ResuableFormConfigComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }