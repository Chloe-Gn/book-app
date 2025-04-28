import { Component, input } from '@angular/core';
import { SpacerComponent } from '../spacer/spacer.component';

@Component({
  selector: 'app-block-error-message',
  imports: [SpacerComponent],
  templateUrl: './block-error-message.component.html',
  styleUrl: './block-error-message.component.scss',
})
export class BlockErrorMessageComponent {
  marginTop = input('');
  errorMessage = input('');
}
