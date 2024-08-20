import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/tasks/task.service';
import { ToastrService } from "ngx-toastr";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; // Import NgbModal

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasksData: any = [];
  filteredTasks: any = [];
  userId: any;
  searchTitle: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  itemsPerPageOptions: number[] = [5, 10, 15, 20];
  taskIdToDelete: number | null = null; // Variable to store task ID to delete

  constructor(
    private taskService: TaskService, 
    private router: Router, 
    private toastr: ToastrService, 
    private modalService: NgbModal // Inject NgbModal service
  ) {}

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    this.currentPage = +(localStorage.getItem('currentPage') ?? 1);
    this.itemsPerPage = +(localStorage.getItem('itemsPerPage') ?? 10);
    this.getTasks();
  }

  getTasks() {
    this.taskService.getAlltasks(this.userId).subscribe((alltasks) => {
      this.tasksData = alltasks;
      this.applyFilter();
    }, (error) => {
      console.log(error);
    });
  }

  openDeleteModal(taskId: number) {
    this.taskIdToDelete = taskId;
    this.modalService.open('deleteTaskModal', { ariaLabelledBy: 'deleteTaskModalLabel' });
  }

  confirmDeleteTask() {
    if (this.taskIdToDelete !== null) {
      this.taskService.deleteTask(this.taskIdToDelete).subscribe(res => {
        this.toastr.info('Task deleted successfully.', 'Success');
        this.getTasks();
        this.modalService.dismissAll(); // Close the modal
      }, (error) => {
        console.log(error);
      });
    }
  }

  onItemsPerPageChange() {
    localStorage.setItem('itemsPerPage', this.itemsPerPage.toString());
    this.currentPage = 1;
    this.applyFilter();
  }

  searchTasks() {
    this.applyFilter();
  }

  applyFilter() {
    if (this.searchTitle) {
      this.filteredTasks = this.tasksData.filter((task: any) => task.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
    } else {
      this.filteredTasks = this.tasksData;
    }
  }

  pageChange(page: number) {
    this.currentPage = page;
    localStorage.setItem('currentPage', this.currentPage.toString());
  }
}
