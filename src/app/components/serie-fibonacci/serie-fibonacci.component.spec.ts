import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieFibonacciComponent } from './serie-fibonacci.component';

describe('SerieFibonacciComponent', () => {
  let component: SerieFibonacciComponent;
  let fixture: ComponentFixture<SerieFibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieFibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
