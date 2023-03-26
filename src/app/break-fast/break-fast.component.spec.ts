import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakFastComponent } from './break-fast.component';

describe('BreakFastComponent', () => {
  let component: BreakFastComponent;
  let fixture: ComponentFixture<BreakFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakFastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
