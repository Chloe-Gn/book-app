import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnInit,
  Signal,
  SimpleChanges,
} from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  imports: [UpperCasePipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
})
export class TopBarComponent {
  title = input<string>();
}
