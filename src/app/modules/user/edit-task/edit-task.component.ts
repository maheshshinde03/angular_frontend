import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../core/services/tasks/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit{
  taskId: any;
  taskDetails: any;

  //updateTaskForm : FormBuilder;
   updateTaskForm : FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private taskService : TaskService,
    private fb: FormBuilder,
    private router: Router,
    private  toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>{
     this.taskId = data['id'];

     this.taskService.getTaskByTd(this.taskId).subscribe(taskData=>{
      this.taskDetails = taskData;
       console.log("Task Details are ",this.taskDetails);
     });
    });

    // this.updateTaskForm = this.fb.group({
    //   title: ['', [Validators.required]],
    //   description: ['', [Validators.required]],
    // });

  
    this.updateTaskForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required)
    });
  }
  

  editTask(){

    let updateTask ={                           
      title :this.updateTaskForm.value.title,
      description :this.updateTaskForm.value.description,
      id : this.taskId
      };

    console.log(updateTask);

    this.taskService.UpdateTask(updateTask).subscribe((response:any)=>{
      //console.log('updated');
      this.toastr.success('Task Updated successfully.', 'Success'); 
      this.router.navigateByUrl('/user/task-list');
    }, (error) =>{
     console.log(error);
   });

  }
}
