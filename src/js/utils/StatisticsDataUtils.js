
import StatisticsActionCreators from '../actions/StatisticsActionCreators';

export default {

  getAllStatistics: function() {
    var list = [
      { title: 'Tests Automated', value: '188,094' },
      { title: 'Provision Runs', value: '53,997' },
      { title: 'Code Coverage', value: '71%' }
    ];

    StatisticsActionCreators.receiveAll(list.map(function (s, i) {
      s.id = i;
      return s;
    }));
  }

};
