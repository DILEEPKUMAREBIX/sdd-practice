import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LchComponent } from './lch.component';

describe('LchComponent', () => {
  let component: LchComponent;
  let fixture: ComponentFixture<LchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
