import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewformationsComponent } from './viewformations.component';

describe('ViewformationsComponent', () => {
  let component: ViewformationsComponent;
  let fixture: ComponentFixture<ViewformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewformationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
