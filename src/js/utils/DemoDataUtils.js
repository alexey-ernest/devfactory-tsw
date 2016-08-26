
import DemoActionCreators from '../actions/DemoActionCreators';

export default {

  sendDemoRequest(demo) {

    // emulating HTTP request
    setTimeout(function () {
      DemoActionCreators.receiveSuccessResponse();
    }, 3000);
  }

};
