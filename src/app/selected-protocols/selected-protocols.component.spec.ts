import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedProtocolsComponent } from './selected-protocols.component';

describe('SelectedProtocolsComponent', () => {
  let component: SelectedProtocolsComponent;
  let fixture: ComponentFixture<SelectedProtocolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedProtocolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
