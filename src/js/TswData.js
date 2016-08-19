/**
 * Initialize app's data.
 */

var BenefitDataUtils = require('./utils/BenefitDataUtils');
var DemoDataUtils = require('./utils/DemoDataUtils');
var FeatureDataUtils = require('./utils/FeatureDataUtils');
var StatisticsDataUtils = require('./utils/StatisticsDataUtils');
var CustomerDataUtils = require('./utils/CustomerDataUtils');
var NewsDataUtils = require('./utils/NewsDataUtils');

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
    CustomerDataUtils.getAllCustomers();

    // News
    if (process.env.NODE_ENV !== 'production') {
      NewsDataUtils.getFakeNews();
    } else {
      NewsDataUtils.getLatestNews();
    }
  }
};
