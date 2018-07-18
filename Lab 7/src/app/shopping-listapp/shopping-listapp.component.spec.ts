import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListappComponent } from './shopping-listapp.component';

describe('ShoppingListappComponent', () => {
  let component: ShoppingListappComponent;
  let fixture: ComponentFixture<ShoppingListappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
