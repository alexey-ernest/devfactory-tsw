
var BenefitActionCreators = require('../actions/BenefitActionCreators');

module.exports = {

  getAllBenefits: function() {
    var list = [
      'Full functional tests in 3 days',
      'Web, mobile, desktop and CLI',
      'CI/CD friendly',
      'Easy maintenace'
    ];

    BenefitActionCreators.receiveAll(list.map(function (t, i) {
      return {
        id: i,
        text: t
      };
    }));
  }

};
