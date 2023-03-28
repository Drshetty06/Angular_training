import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoginComponentComponent } from './new-login-component.component';

describe('NewLoginComponentComponent', () => {
  let component: NewLoginComponentComponent;
  let fixture: ComponentFixture<NewLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLoginComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
