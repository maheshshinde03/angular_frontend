import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionFormComponent } from './content-projection-form.component';

describe('ContentProjectionFormComponent', () => {
  let component: ContentProjectionFormComponent;
  let fixture: ComponentFixture<ContentProjectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentProjectionFormComponent]
    });
    fixture = TestBed.createComponent(ContentProjectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
