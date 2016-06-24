import {Component} from '@angular/core';

import {WaypointDirective, CarouselDirective} from '../shared';
import {Review} from './review';
import {REVIEWS} from './reviews';

@Component({
  selector: 'tsw-reviews',
  template: require('./reviews.component.html'),
  styles: [require('./reviews.component.css')],
  directives: [
    WaypointDirective,
    CarouselDirective
  ]
})
export class ReviewsComponent {
  reviews: Review[] = REVIEWS;
}
