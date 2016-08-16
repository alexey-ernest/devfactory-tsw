
var DemoStorageActionCreators = require('../actions/DemoStorageActionCreators');

module.exports = {

  getDemo: function() {
    var demo = JSON.parse(localStorage.getItem('demo')) || {};

    DemoStorageActionCreators.receive(demo);
  },

  setDemo: function(demo) {

    localStorage.setItem('demo', JSON.stringify(demo));
  }
};
