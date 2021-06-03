import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1RemoveComponent } from './view1-remove.component';

describe('View1RemoveComponent', () => {
  let component: View1RemoveComponent;
  let fixture: ComponentFixture<View1RemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1RemoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1RemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
