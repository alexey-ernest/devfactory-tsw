/**
 * Initialize app's data.
 */

var BenefitDataUtils = require('./utils/BenefitDataUtils');
var DemoDataUtils = require('./utils/DemoDataUtils');
var FeatureDataUtils = require('./utils/FeatureDataUtils');
var StatisticsDataUtils = require('./utils/StatisticsDataUtils');
var CustomerActionCreatores = require('./utils/CustomerDataUtils');

module.exports = {

  init: function() {

    // Benefits
    BenefitDataUtils.getAllBenefits();

    // Demo form
    DemoDataUtils.getDemo();

    // Features
    FeatureDataUtils.getAllFeatures();

    // Statistics
    StatisticsDataUtils.getAllStatistics();

    // Customers
    CustomerActionCreatores.getAllCustomers();
  }

};
