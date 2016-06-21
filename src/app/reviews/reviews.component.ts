import {Component} from '@angular/core';

import {WaypointDirective, CarouselDirective} from '../shared';

import '../../../public/css/owl-carousel/owl.carousel.css';
import '../../../public/css/owl-carousel/owl.theme.css';

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
  reviews: any[] = [
    {
      image: '../../../public/images/andy.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      author: 'Andy Montgomery, SVP Engineering Aurea'
    },
    {
      image: '../../../public/images/andy.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      author: 'Andy Montgomery, SVP Engineering Aurea'
    }
  ];
}
