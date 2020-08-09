import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensePhysiqueComponent } from './defense-physique.component';

describe('DefensePhysiqueComponent', () => {
  let component: DefensePhysiqueComponent;
  let fixture: ComponentFixture<DefensePhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefensePhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefensePhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
