import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerUpdateComponent } from './speaker-update.component';

describe('SpeakerUpdateComponent', () => {
  let component: SpeakerUpdateComponent;
  let fixture: ComponentFixture<SpeakerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakerUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
