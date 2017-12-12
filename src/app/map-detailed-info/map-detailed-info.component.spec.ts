import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDetailedInfoComponent } from './map-detailed-info.component';

describe('MapDetailedInfoComponent', () => {
  let component: MapDetailedInfoComponent;
  let fixture: ComponentFixture<MapDetailedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDetailedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
