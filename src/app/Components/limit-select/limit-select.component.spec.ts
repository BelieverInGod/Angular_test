import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitSelectComponent } from './limit-select.component';

describe('LimitSelectComponent', () => {
  let component: LimitSelectComponent;
  let fixture: ComponentFixture<LimitSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LimitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
