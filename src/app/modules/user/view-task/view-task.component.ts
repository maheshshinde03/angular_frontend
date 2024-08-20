
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../core/services/tasks/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit{

  taskId: any;
  taskDetails: any;

  constructor(private activatedRoute: ActivatedRoute,
    private taskService: TaskService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      this.taskId = data['id'];

      this.taskService.getTaskByTd(this.taskId).subscribe(taskData => {
        this.taskDetails = taskData;
        console.log("Task Details are ", this.taskDetails);
      });
    });
  }

}
