import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditingReactiveFormComponent } from './inline-editing-reactive-form.component';

describe('InlineEditingReactiveFormComponent', () => {
  let component: InlineEditingReactiveFormComponent;
  let fixture: ComponentFixture<InlineEditingReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineEditingReactiveFormComponent]
    });
    fixture = TestBed.createComponent(InlineEditingReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
