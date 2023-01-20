import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeFaceLeftComponent } from './cube-face-left.component';

describe('CubeFaceLeftComponent', () => {
  let component: CubeFaceLeftComponent;
  let fixture: ComponentFixture<CubeFaceLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubeFaceLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubeFaceLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
