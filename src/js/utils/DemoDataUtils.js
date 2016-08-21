
import DemoStorageActionCreators from '../actions/DemoStorageActionCreators';

export default {

  getDemo: function() {
    var demo = JSON.parse(localStorage.getItem('demo')) || {};

    DemoStorageActionCreators.receive(demo);
  },

  setDemo: function(demo) {

    localStorage.setItem('demo', JSON.stringify(demo));
  }
};
