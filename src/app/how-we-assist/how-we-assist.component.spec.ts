import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeAssistComponent } from './how-we-assist.component';

describe('HowWeAssistComponent', () => {
  let component: HowWeAssistComponent;
  let fixture: ComponentFixture<HowWeAssistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeAssistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
