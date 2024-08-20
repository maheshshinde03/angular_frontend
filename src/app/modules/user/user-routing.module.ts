import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'task-list', component: TasksListComponent, canActivate: [authGuard] },
      { path: 'add-task', component: AddTaskComponent },
      { path: 'view-task/:id', component: ViewTaskComponent },
      { path:'edit-task/:id',  component: EditTaskComponent},
      { path: '', redirectTo: 'task-list', pathMatch: 'full' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
