import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSupervisorScreenComponent } from './view-edit-supervisor-screen.component';

describe('ViewEditSupervisorScreenComponent', () => {
  let component: ViewEditSupervisorScreenComponent;
  let fixture: ComponentFixture<ViewEditSupervisorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEditSupervisorScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEditSupervisorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
