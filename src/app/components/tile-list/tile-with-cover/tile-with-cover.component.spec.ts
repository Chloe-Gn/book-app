import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileWithCoverComponent } from './tile-with-cover.component';

describe('TileWithCoverComponent', () => {
  let component: TileWithCoverComponent;
  let fixture: ComponentFixture<TileWithCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileWithCoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileWithCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
