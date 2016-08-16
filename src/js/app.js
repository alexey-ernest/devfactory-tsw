/**
 * This file bootstraps the entire application.
 */

var TswApp = require('./components/TswApp.react');
var TswData = require('./TswData');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

// init initial data
TswData.init();

React.render(
  <TswApp />,
  document.getElementById('react')
);
