import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2CountdownComponent } from './ng2-countdown.component';

describe('Ng2CountdownComponent', () => {
  let component: Ng2CountdownComponent;
  let fixture: ComponentFixture<Ng2CountdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2CountdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2CountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
