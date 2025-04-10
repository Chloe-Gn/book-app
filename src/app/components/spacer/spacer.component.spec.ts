import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacerComponent } from './spacer.component';

describe('SpacerComponent', () => {
  let component: SpacerComponent;
  let fixture: ComponentFixture<SpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
