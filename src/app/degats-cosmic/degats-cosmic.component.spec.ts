import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DegatsCosmicComponent } from './degats-cosmic.component';

describe('DegatsCosmicComponent', () => {
  let component: DegatsCosmicComponent;
  let fixture: ComponentFixture<DegatsCosmicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DegatsCosmicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DegatsCosmicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
