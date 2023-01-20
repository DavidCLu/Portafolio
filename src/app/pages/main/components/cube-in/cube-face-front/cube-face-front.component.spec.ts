import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceFrontComponent } from './cube-face-front.component';

describe('CubeFaceFrontComponent', () => {
  let component: CubeFaceFrontComponent;
  let fixture: ComponentFixture<CubeFaceFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
