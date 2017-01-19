/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputStoreComponent } from './input-store.component';

describe('InputStoreComponent', () => {
  let component: InputStoreComponent;
  let fixture: ComponentFixture<InputStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
