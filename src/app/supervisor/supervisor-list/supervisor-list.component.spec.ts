import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviserListComponent } from './supervisor-list.component';

describe('SuperviserListComponent', () => {
  let component: SuperviserListComponent;
  let fixture: ComponentFixture<SuperviserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperviserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperviserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
