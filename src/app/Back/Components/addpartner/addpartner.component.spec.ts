import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartnerComponent } from './addpartner.component';

describe('AddpartnerComponent', () => {
  let component: AddpartnerComponent;
  let fixture: ComponentFixture<AddpartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpartnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
