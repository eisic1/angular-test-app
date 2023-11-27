import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LchDemoComponent } from './lch-demo.component';

describe('LchDemoComponent', () => {
  let component: LchDemoComponent;
  let fixture: ComponentFixture<LchDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LchDemoComponent]
    });
    fixture = TestBed.createComponent(LchDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
