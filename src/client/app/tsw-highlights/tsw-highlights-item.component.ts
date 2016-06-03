import {Component, Input} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-highlights-item',
  templateUrl: 'tsw-highlights-item.component.html'
})
export class TswHighlightsItemComponent {
  @Input()
  iconClass: string;

  @Input()
  title: string;

  @Input()
  description: string;
}