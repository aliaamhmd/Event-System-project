import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSignUpComponent } from './std-sign-up.component';

describe('StdSignUpComponent', () => {
  let component: StdSignUpComponent;
  let fixture: ComponentFixture<StdSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StdSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
