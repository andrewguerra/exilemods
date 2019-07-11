import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemchooserComponent } from './itemchooser.component';

describe('ItemchooserComponent', () => {
  let component: ItemchooserComponent;
  let fixture: ComponentFixture<ItemchooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemchooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemchooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
