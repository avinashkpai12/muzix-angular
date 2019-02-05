import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcardComponent } from './childcard.component';

describe('ChildcardComponent', () => {
  let component: ChildcardComponent;
  let fixture: ComponentFixture<ChildcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
