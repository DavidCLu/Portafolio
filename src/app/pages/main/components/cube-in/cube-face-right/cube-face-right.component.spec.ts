import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceRightComponent } from './cube-face-right.component';

describe('CubeFaceRightComponent', () => {
  let component: CubeFaceRightComponent;
  let fixture: ComponentFixture<CubeFaceRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
