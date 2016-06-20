import {Directive, OnInit, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[waypoint]'
})
export class WaypointDirective implements OnInit {
  @Input()
  classes: string;

  @Input()
  delay: number;

  constructor(private el: ElementRef) {
    el.nativeElement.style.opacity = 0;
  }

  ngOnInit() {
    let Waypoint = window['Waypoint'];
    if (!Waypoint) {
      return;
    }

    let element = this.el.nativeElement;
    let classes = this.classes;
    let delay = +this.delay;
    let waypoint = new Waypoint({
      element: element,
      handler: function () {
        setTimeout(function() {
          if (element.className.indexOf(classes) === -1) {
            element.className += ' ' + classes;
          }
        }, delay);
      },
      offset: '90%'
    });
  }
}
