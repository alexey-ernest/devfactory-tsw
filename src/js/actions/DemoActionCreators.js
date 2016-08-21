/*
 * Demo action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';
import DemoDataUtils from '../utils/DemoDataUtils';

var ActionTypes = TswConstants.ActionTypes;

export default {

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
