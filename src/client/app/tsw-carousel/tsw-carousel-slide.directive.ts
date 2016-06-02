import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: 'tsw-carousel-slide'
})
export class TswCarouselSlideDirective {
  @Input()
  innerHTML: any;

  constructor(element: ElementRef) {
    this.innerHTML = element.nativeElement.innerHTML;
  }
}