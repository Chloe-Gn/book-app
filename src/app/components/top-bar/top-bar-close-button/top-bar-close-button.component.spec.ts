import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarCloseButtonComponent } from './top-bar-close-button.component';

describe('TopBarCloseButtonComponent', () => {
  let component: TopBarCloseButtonComponent;
  let fixture: ComponentFixture<TopBarCloseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBarCloseButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarCloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
