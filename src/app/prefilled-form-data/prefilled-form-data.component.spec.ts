import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefilledFormDataComponent } from './prefilled-form-data.component';

describe('PrefilledFormDataComponent', () => {
  let component: PrefilledFormDataComponent;
  let fixture: ComponentFixture<PrefilledFormDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefilledFormDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefilledFormDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
