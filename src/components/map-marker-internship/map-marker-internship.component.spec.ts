import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerInternshipComponent } from './map-marker-internship.component';

describe('MapMarkerInternshipComponent', () => {
  let component: MapMarkerInternshipComponent;
  let fixture: ComponentFixture<MapMarkerInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMarkerInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
