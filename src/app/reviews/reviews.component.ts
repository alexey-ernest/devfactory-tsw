import {Component} from '@angular/core';

@Component({
  selector: 'tsw-reviews',
  template: require('./reviews.component.html'),
  styles: [require('./reviews.component.css')]
})
export class ReviewsComponent {
  reviews: any[] = [
    {
      image: '../../../public/images/andy.png',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      author: 'Andy Montgomery, SVP Engineering Aurea'
    }
  ];
}
