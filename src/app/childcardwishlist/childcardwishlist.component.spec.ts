import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcardwishlistComponent } from './childcardwishlist.component';

describe('ChildcardwishlistComponent', () => {
  let component: ChildcardwishlistComponent;
  let fixture: ComponentFixture<ChildcardwishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcardwishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcardwishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
