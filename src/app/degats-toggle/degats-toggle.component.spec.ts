import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatsToggleComponent } from './degats-toggle.component';

describe('DegatsToggleComponent', () => {
  let component: DegatsToggleComponent;
  let fixture: ComponentFixture<DegatsToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegatsToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatsToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
