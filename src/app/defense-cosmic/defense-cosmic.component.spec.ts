import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseCosmicComponent } from './defense-cosmic.component';

describe('DefenseCosmicComponent', () => {
  let component: DefenseCosmicComponent;
  let fixture: ComponentFixture<DefenseCosmicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenseCosmicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenseCosmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
