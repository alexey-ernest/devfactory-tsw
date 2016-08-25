
import BenefitActionCreators from '../actions/BenefitActionCreators';

export default {

  getAllBenefits() {
    var list = [
      'Full functional tests in 3 days',
      'Web, mobile, desktop and CLI',
      'API docs, CI/CD friendly',
      '1-click maintenace'
    ];

    BenefitActionCreators.receiveAll(list.map(function (t, i) {
      return {
        id: i,
        text: t
      };
    }));
  }

};
