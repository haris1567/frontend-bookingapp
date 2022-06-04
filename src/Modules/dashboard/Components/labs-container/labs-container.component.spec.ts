import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabsContainerComponent } from './labs-container.component';

describe('LabsContainerComponent', () => {
  let component: LabsContainerComponent;
  let fixture: ComponentFixture<LabsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
