import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupervisorScreenComponent } from './add-superviser-screen.component';

describe('AddSupervisorScreenComponent', () => {
  let component: AddSupervisorScreenComponent;
  let fixture: ComponentFixture<AddSupervisorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupervisorScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupervisorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
