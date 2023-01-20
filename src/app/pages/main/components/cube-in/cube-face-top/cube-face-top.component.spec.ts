import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceTopComponent } from './cube-face-top.component';

describe('CubeFaceTopComponent', () => {
  let component: CubeFaceTopComponent;
  let fixture: ComponentFixture<CubeFaceTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
