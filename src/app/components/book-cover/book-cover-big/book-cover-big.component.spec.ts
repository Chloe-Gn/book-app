import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCoverBigComponent } from './book-cover-big.component';

describe('BookCoverBigComponent', () => {
  let component: BookCoverBigComponent;
  let fixture: ComponentFixture<BookCoverBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookCoverBigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCoverBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
