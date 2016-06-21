import {Directive, OnInit, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective implements OnInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    let $ = window['jQuery'];
    if (!$) {
      return;
    }

    let element = this.el.nativeElement;
    $(document).ready(function() {
      let $element = $(element);
      if (!$element.owlCarousel) {
        return;
      }

      $element.owlCarousel({
        items: 1,
        singleItem: true,
        autoPlay: 5000,
        slideSpeed: 400,
        stopOnHover: true
      });
    });
  }
}
