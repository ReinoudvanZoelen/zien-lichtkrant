import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMarkerInstitutionComponent } from './map-marker-institution.component';

describe('MapMarkerInstitutionComponent', () => {
  let component: MapMarkerInstitutionComponent;
  let fixture: ComponentFixture<MapMarkerInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMarkerInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMarkerInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
