import { TitleCasePipe } from '@angular/common';
import { Component, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-big-chips',
  imports: [TitleCasePipe],
  templateUrl: './big-chips.component.html',
  styleUrl: './big-chips.component.scss',
})
export class BigChipsComponent {
  chips = input<string[]>();

  carousel = viewChild<ElementRef<HTMLElement>>('carousel');

  ngAfterViewInit(): void {
    this.carousel()?.nativeElement.scrollTo({
      left: 0,
      behavior: 'auto',
    });
  }

  isDragging = false;
  startX = 0;
  scrollLeft = 0;

  onMouseDown(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    const pageX = this.getPageX(event);
    this.startX = pageX - this.carousel()!.nativeElement.offsetLeft;
    this.scrollLeft = this.carousel()?.nativeElement.scrollLeft ?? 0;
  }

  onMouseUpOrLeave() {
    this.isDragging = false;
  }

  onMouseMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    const pageX = this.getPageX(event);
    const x = pageX - this.carousel()!.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 1.5;
    this.carousel()?.nativeElement.scrollTo({
      left: this.scrollLeft - walk,
      behavior: 'auto',
    });
  }

  onWheel(event: WheelEvent) {
    if (!this.carousel()) return;
    event.preventDefault();
    this.carousel()!.nativeElement.scrollBy({
      left: event.deltaY,
      behavior: 'smooth',
    });
  }

  private getPageX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.pageX : event.touches[0].pageX;
  }
}
