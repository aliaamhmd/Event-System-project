import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkSignUpComponent } from './spk-sign-up.component';

describe('SpkSignUpComponent', () => {
  let component: SpkSignUpComponent;
  let fixture: ComponentFixture<SpkSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpkSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
