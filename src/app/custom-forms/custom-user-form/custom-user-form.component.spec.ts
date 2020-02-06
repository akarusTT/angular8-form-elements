import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomUserFormComponent } from './custom-user-form.component';

describe('CustomUserFormComponent', () => {
  let component: CustomUserFormComponent;
  let fixture: ComponentFixture<CustomUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
