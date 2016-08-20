/**
 * This file bootstraps the entire application.
 */

// App
var TswApp = require('./components/TswApp.react');
var TswData = require('./TswData');
TswData.init();

// React
var React = require('react');
var ReactDOM = require('react-dom');

// Material UI
var injectTapEventPlugin = require('react-tap-event-plugin');
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
var MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
var getMuiTheme = require('material-ui/styles/getMuiTheme').default;
var colors = require('material-ui/styles/colors');
var fade = require('material-ui/utils/colorManipulator').fade;

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
var muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.cyan500,
    primary2Color: colors.cyan700,
    primary3Color: colors.grey400,
    accent1Color: colors.amber500,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
    clockCircleColor: fade(colors.darkBlack, 0.07),
    shadowColor: colors.fullBlack,
  }
});

// Pass muiTheme down to the components tree via context
var App = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  getChildContext: function() {
    return {muiTheme: muiTheme};
  },

  render: function() {
    return (
      <TswApp />
    );
  }

});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('react')
);
