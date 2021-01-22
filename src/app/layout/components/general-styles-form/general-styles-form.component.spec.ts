import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStylesFormComponent } from './general-styles-form.component';

describe('GeneralStylesFormComponent', () => {
  let component: GeneralStylesFormComponent;
  let fixture: ComponentFixture<GeneralStylesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralStylesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStylesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
