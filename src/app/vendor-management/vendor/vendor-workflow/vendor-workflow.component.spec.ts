import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorWorkflowComponent } from './vendor-workflow.component';

describe('VendorWorkflowComponent', () => {
  let component: VendorWorkflowComponent;
  let fixture: ComponentFixture<VendorWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
