import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidenavbarComponent } from './left-sidenavbar.component';

describe('LeftSidenavbarComponent', () => {
  let component: LeftSidenavbarComponent;
  let fixture: ComponentFixture<LeftSidenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSidenavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftSidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
