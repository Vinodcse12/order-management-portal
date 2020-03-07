import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopModalComponent } from './pop-modal.component';

describe('PopModalComponent', () => {
  let component: PopModalComponent;
  let fixture: ComponentFixture<PopModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
