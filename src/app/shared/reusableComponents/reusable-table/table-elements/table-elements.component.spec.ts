import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableElementsComponent } from './table-elements.component';

describe('TableElementsComponent', () => {
  let component: TableElementsComponent;
  let fixture: ComponentFixture<TableElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableElementsComponent]
    });
    fixture = TestBed.createComponent(TableElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
