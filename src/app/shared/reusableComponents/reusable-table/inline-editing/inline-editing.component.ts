import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { AdminService } from 'src/app/core/services/admin/admin.service';

@Component({
  selector: 'app-inline-editing',
  templateUrl: './inline-editing.component.html',
  styleUrls: ['./inline-editing.component.css']
})
export class InlineEditingComponent implements OnInit{
  
  userArray : any[] = [];
  filteredUsers: any []= [];
  oldUserObj: any;
  searchText: string = '';

  filterData: any [] = [];
  searchBox: string = '';



  constructor(private adminService : AdminService){

  }

  ngOnInit(): void {
    this.loadAllUser();
  }

  loadAllUser(){
   this.adminService.getAllUsers().subscribe((res:any) =>{
    this.userArray = res;
   this.filteredUsers = res;
   
    console.log(res);
   })
  }

  editUser(item: any){
    this.oldUserObj = JSON.stringify(item); //when click on edit and after leave it without saving the latest values will be there, so in this case we need to update it with original values
    this.userArray.forEach(element =>{     //user can edit only one row at a time
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  deleteUser(item: any){
    item.isEdit = false;
  }

  onCancel(item: any){
    const oldObj =  JSON.parse(this.oldUserObj);   // to get origina back
    item.name = oldObj.name;
    item.email=  oldObj.email;
    item.mobile=  oldObj.mobile;
    item.city=  oldObj.city;


    item.isEdit = false;
  }

  validateField(item: any){
   if(item !== ''){
    return false;
   }
   else{
    return true;
   }
  }

  validateMobile(mobile: any) {
    if(mobile  === '') {
      return "Required";
    } else {
      if(mobile.length > 10) {
        return "max length is 10";
      } else {
        return "";
      }
    }
  }

  validateForm(obj: any){
   if(obj.name !='' && obj.email !='' && obj.mobile !='' && obj.city !=''){
     return false;
   }
   else{
    return true;
   }
  }

  filter(event: any) {
    this.filteredUsers = this.userArray.filter((searchData:any) => {
      let search = event;
      let values = Object.values(searchData);
      let flag = false
      values.forEach((val: any) => {
        if (val.toString().toLowerCase().indexOf(search) > -1) {
          flag = true;
          return;
        }
      })
      if (flag) {
        return searchData
      }
    });
  }

  onNameSort() {
    const filteredData =  this.filteredUsers.sort((a: any, b: any) =>
    a.name.localeCompare(b.name));
    this.filteredUsers = filteredData;
  }

  onAdd(){
    const obj = {
      "id": "",
      "name": "",
      "email": "",
      "mobile": "",
      "city": "",
      "isEdit": true
    };
    this.userArray.unshift(obj);       //unshift will add new empty row at top of table, u can use push also
  }

  onUpdate(userObj:any) {
    console.log(userObj);
    //write api call and send obj and refresh table
  }

}
