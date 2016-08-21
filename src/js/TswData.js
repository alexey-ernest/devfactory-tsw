/**
 * Initialize app's data.
 */

import BenefitDataUtils from './utils/BenefitDataUtils';
import DemoDataUtils from './utils/DemoDataUtils';
import FeatureDataUtils from './utils/FeatureDataUtils';
import StatisticsDataUtils from './utils/StatisticsDataUtils';
import CustomerDataUtils from './utils/CustomerDataUtils';
import NewsDataUtils from './utils/NewsDataUtils';

export default {

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
