import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigChipsComponent } from './big-chips.component';

describe('BigChipsComponent', () => {
  let component: BigChipsComponent;
  let fixture: ComponentFixture<BigChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigChipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
