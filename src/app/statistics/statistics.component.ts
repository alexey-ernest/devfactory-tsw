import {Component} from '@angular/core';

@Component({
  selector: 'tsw-statistics',
  template: require('./statistics.component.html'),
  styles: [require('./statistics.component.css')]
})
export class StatisticsComponent {
  statistics: any[] = [
    { title: 'Tests Automated', value: '188,094' },
    { title: 'Provision Runs', value: '53,997' },
    { title: 'Code Coverage', value: '71%' }
  ];
}
