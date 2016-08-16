/*
 * Demo action creators.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TswConstants = require('../constants/TswConstants');
var DemoDataUtils = require('../utils/DemoDataUtils');

var ActionTypes = TswConstants.ActionTypes;

module.exports = {

  /**
   * @param      {Object}  demo
   */
  submitForm: function(demo) {
    AppDispatcher.dispatch({
      type: ActionTypes.SUBMIT_DEMO_FORM,
      demo: demo
    });

    // cache demo state
    DemoDataUtils.setDemo(demo);
  }

};
