import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizeArrayComponent } from './visualize-array.component';

describe('VisualizeArrayComponent', () => {
  let component: VisualizeArrayComponent;
  let fixture: ComponentFixture<VisualizeArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizeArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizeArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
