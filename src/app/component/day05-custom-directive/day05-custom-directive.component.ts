import { Component } from '@angular/core';
import { HighlightDirectiveDirective } from '../../shared/directives/highlight/highlight-directive.directive';

@Component({
  selector: 'app-day05-custom-directive',
  imports: [HighlightDirectiveDirective],
  templateUrl: './day05-custom-directive.component.html',
  styleUrl: './day05-custom-directive.component.scss'
})
export class Day05CustomDirectiveComponent {

}
