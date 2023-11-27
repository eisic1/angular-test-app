import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentProductComponent } from './ng-content-product.component';

describe('NgContentProductComponent', () => {
  let component: NgContentProductComponent;
  let fixture: ComponentFixture<NgContentProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgContentProductComponent]
    });
    fixture = TestBed.createComponent(NgContentProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
