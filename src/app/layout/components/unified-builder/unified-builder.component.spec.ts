import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifiedBuilderComponent } from './unified-builder.component';

describe('UnifiedBuilderComponent', () => {
  let component: UnifiedBuilderComponent;
  let fixture: ComponentFixture<UnifiedBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifiedBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnifiedBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
