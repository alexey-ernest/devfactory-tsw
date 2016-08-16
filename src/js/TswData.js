/**
 * Initialize app's data.
 */

var BenefitDataUtils = require('./utils/BenefitDataUtils');
var DemoDataUtils = require('./utils/DemoDataUtils');

module.exports = {

  init: function() {

    // Benefits
    BenefitDataUtils.getAllBenefits();

    // Demo form
    DemoDataUtils.getDemo();

    // Features
  }

};
