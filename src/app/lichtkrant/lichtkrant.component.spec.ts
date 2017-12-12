import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichtkrantComponent } from './lichtkrant.component';

describe('LichtkrantComponent', () => {
  let component: LichtkrantComponent;
  let fixture: ComponentFixture<LichtkrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichtkrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichtkrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
