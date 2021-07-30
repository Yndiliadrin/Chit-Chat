import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisztComponent } from './regiszt.component';

describe('RegisztComponent', () => {
  let component: RegisztComponent;
  let fixture: ComponentFixture<RegisztComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisztComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisztComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
