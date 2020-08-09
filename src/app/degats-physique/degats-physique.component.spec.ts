import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatsPhysiqueComponent } from './degats-physique.component';

describe('DegatsPhysiqueComponent', () => {
  let component: DegatsPhysiqueComponent;
  let fixture: ComponentFixture<DegatsPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegatsPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatsPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
