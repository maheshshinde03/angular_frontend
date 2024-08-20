import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from '../../../core/services/tasks/task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  addTaskForm!: FormGroup;
  data: any = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private taskService: TaskService,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.addTaskForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  addTask() {
    this.data = {
      userId: localStorage.getItem('userId'),
      title: this.addTaskForm.value.title,
      description: this.addTaskForm.value.description
    }
    //console.log(JSON.stringify(this.data));
    this.taskService.createNewTask(this.data).subscribe((response: any) => {
      this.toastr.success('Task Added successfully.', 'Success');
      this.router.navigateByUrl('/user/task-list');
    }, (error) => {
      console.log(error);
    });
  }
}
