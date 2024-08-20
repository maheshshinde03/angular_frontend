import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../core/services/admin/admin.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{

  usersArray : any[] = [];
  columnArray: any[] = [
    {header: 'Name', fieldName:'name', dataType:'string'},
    {header: 'Email', fieldName:'email', dataType:'string'},
    {header: 'Mobile', fieldName:'mobile', dataType:'number'},
    {header: 'City', fieldName:'city', dataType:'string'},
    {header: 'Address', fieldName:'address', dataType:'string'},    // adding this olny bcz we are going to create custom pipe to show something if data is not available for particular field
    {header: 'Date', fieldName:'currentDate', dataType:'date'},
  ];

  constructor(private route: ActivatedRoute, private adminService : AdminService){
   // this.usersArray = route.snapshot.data['userList'];      //using for resolve concept
  }
  ngOnInit(): void {
    this.getUsers();       // comment bcz we can get same with the help of resolve
  }

  getUsers(){
   this.adminService.getAllUsers().subscribe((res:any) =>{
    this.usersArray = res;
    this.usersArray.forEach(element =>{
      element.currentDate = new Date();              //adding this date for the purpose how to pass pipe operatore to reusable table
    })
    console.log(res);
   })
  }

editUser($event: any){
debugger;
} 
deleteUser($event: any){

}
}
