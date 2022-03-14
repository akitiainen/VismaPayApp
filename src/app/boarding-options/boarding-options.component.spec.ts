import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingOptionsComponent } from './boarding-options.component';

describe('BoardingOptionsComponent', () => {
  let component: BoardingOptionsComponent;
  let fixture: ComponentFixture<BoardingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardingOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
