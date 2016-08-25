/*
 * Demo action creators.
 */

import AppDispatcher from '../dispatcher/AppDispatcher';
import TswConstants from '../constants/TswConstants';

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
  }

};
