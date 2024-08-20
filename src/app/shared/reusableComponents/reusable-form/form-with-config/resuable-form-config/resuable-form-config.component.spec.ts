import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuableFormConfigComponent } from './resuable-form-config.component';

describe('ResuableFormConfigComponent', () => {
  let component: ResuableFormConfigComponent;
  let fixture: ComponentFixture<ResuableFormConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResuableFormConfigComponent]
    });
    fixture = TestBed.createComponent(ResuableFormConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
