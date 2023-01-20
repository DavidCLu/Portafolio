import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceBottomComponent } from './cube-face-bottom.component';

describe('CubeFaceBottomComponent', () => {
  let component: CubeFaceBottomComponent;
  let fixture: ComponentFixture<CubeFaceBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
