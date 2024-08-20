import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  private currentPageIndex: number = 1;
  private itemsPerPage: number = 10;

  setCurrentPageIndex(index: number) {
    this.currentPageIndex = index;
  }

  getCurrentPageIndex(): number {
    return this.currentPageIndex;
  }

  setItemsPerPage(items: number) {
    this.itemsPerPage = items;
  }

  getItemsPerPage(): number {
    return this.itemsPerPage;
  }
  
}


