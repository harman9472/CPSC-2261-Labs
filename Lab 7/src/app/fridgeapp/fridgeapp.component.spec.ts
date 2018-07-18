import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeappComponent } from './fridgeapp.component';

describe('FridgeappComponent', () => {
  let component: FridgeappComponent;
  let fixture: ComponentFixture<FridgeappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
