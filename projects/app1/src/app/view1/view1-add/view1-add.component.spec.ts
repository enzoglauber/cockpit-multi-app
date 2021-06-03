import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1AddComponent } from './view1-add.component';

describe('View1AddComponent', () => {
  let component: View1AddComponent;
  let fixture: ComponentFixture<View1AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1AddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
