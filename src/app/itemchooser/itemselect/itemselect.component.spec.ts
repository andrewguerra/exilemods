import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemselectComponent } from './itemselect.component';

describe('ItemselectComponent', () => {
  let component: ItemselectComponent;
  let fixture: ComponentFixture<ItemselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
