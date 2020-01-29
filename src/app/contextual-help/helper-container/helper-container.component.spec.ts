import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperContainerComponent } from './helper-container.component';

describe('HelperContainerComponent', () => {
  let component: HelperContainerComponent;
  let fixture: ComponentFixture<HelperContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelperContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelperContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
