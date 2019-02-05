import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmethodsComponent } from './crudmethods.component';

describe('CrudmethodsComponent', () => {
  let component: CrudmethodsComponent;
  let fixture: ComponentFixture<CrudmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
