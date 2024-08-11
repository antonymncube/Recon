import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDilogComponent } from './items-dilog.component';

describe('ItemsDilogComponent', () => {
  let component: ItemsDilogComponent;
  let fixture: ComponentFixture<ItemsDilogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsDilogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsDilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
