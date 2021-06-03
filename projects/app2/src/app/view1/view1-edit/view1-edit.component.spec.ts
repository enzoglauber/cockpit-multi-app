import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1EditComponent } from './view1-edit.component';

describe('View1EditComponent', () => {
  let component: View1EditComponent;
  let fixture: ComponentFixture<View1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
