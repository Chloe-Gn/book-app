import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  imports: [UpperCasePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  host: {
    '[style.position]': 'computedPosition',
    '[style.marginBottom]': 'computedMarginBottom',
    '[style.fontFamily]': 'computedFontFamily',
    '[style.color]': 'computedTitleColor',
    '[style.padding]': 'computedPadding',
    '[style.marginLeft]': 'computedMarginLeft',
    '[style.marginRight]': 'computedMarginRight',
    '[style.backgroundColor]': 'computedBackgroundColor',
  },
})
export class TopBarComponent {
  title = input<string>();
  color = input<string>();
  bgColor = input<string>();
  titleColor = input<string>();
  fontFamily = input<string>();
  position = input<string>();
  marginBottom = input<string>();
  padding = input<string>();
  marginRight = input<string>();
  marginLeft = input<string>();
  top = input<string>();

  get compputedTop() {
    return this.top();
  }

  get computedBackgroundColor() {
    return this.bgColor();
  }

  get computedPosition() {
    return this.position();
  }

  get computedMarginBottom() {
    return this.marginBottom();
  }

  get computedFontFamily() {
    return this.fontFamily();
  }

  get computedTitleColor() {
    return this.titleColor();
  }

  get computedPadding() {
    return this.padding();
  }

  get computedMarginRight() {
    return this.marginRight();
  }

  get computedMarginLeft() {
    return this.marginLeft();
  }
}
