import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpartnersComponent } from './viewpartners.component';

describe('ViewpartnersComponent', () => {
  let component: ViewpartnersComponent;
  let fixture: ComponentFixture<ViewpartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
