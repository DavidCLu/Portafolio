import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceBackComponent } from './cube-face-back.component';

describe('CubeFaceBackComponent', () => {
  let component: CubeFaceBackComponent;
  let fixture: ComponentFixture<CubeFaceBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
