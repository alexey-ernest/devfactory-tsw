/**
 * React app constants.
 */

var keyMirror = require('keymirror');

module.exports = {

  ActionTypes: keyMirror({
    RECEIVE_BENEFITS: null,
    RECEIVE_DEMO: null,
    SUBMIT_DEMO_FORM: null,
    RECEIVE_FEATURES: null,
    RECEIVE_STATISTICS: null,
    RECEIVE_CUSTOMERS: null,
    RECEIVE_NEWS: null
  })

};
