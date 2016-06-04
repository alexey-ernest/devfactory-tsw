import {Component} from 'angular2/core';

import {TswHighlightsItemComponent} from './tsw-highlights-item.component';

@Component({
  moduleId: __moduleName,
  selector: 'tsw-highlights',
  templateUrl: 'tsw-highlights.component.html',
  directives: [TswHighlightsItemComponent]
})
export class TswHighlightsComponent  {
}