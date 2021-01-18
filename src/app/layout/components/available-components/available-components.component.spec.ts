import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableComponentsComponent } from './available-components.component';

describe('AvailableComponentsComponent', () => {
  let component: AvailableComponentsComponent;
  let fixture: ComponentFixture<AvailableComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
