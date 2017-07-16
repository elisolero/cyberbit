import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTimeComponent } from './selected-time.component';

describe('SelectedTimeComponent', () => {
  let component: SelectedTimeComponent;
  let fixture: ComponentFixture<SelectedTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
