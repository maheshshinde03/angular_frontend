import { Serializer } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-elements',
  templateUrl: './table-elements.component.html',
  styleUrls: ['./table-elements.component.css']
})
export class TableElementsComponent implements OnChanges{

  @Input() tableData: any[] = [];
  @Input() columnArray: any [] = [];

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();

  @Input() showActionButton: boolean = false;

  filterData: any [] = [];
  searchBox: string = '';

  constructor(){
  
   // this.columnKeys = Object.keys(this.tableData[0]);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.filterData = this.tableData;    //assign to for searching
  }

  onSearchChange(searchVal: string){
  this.filterData = this.tableData.filter((searchData: any)=> {
    const values = Object.values(searchData);
    let flag = false;
    values.forEach((val: any) => {
      if(val.toString().toLowerCase().indexOf(searchVal) > -1){
        flag = true;
        return;
      }
    });
    if(flag){
      return searchData;
    }
   // return flag;
  });
  }

  editRecord(item: any){
    debugger;
   this.onEdit.emit(item);
  }

  deleteRecord(item: any){
  this.onDelete.emit(item);
  }

}
