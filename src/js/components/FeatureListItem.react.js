/**
 * Feature list item component.
 */

import React, {Component, PropTypes} from 'react';
import FontIcon from 'material-ui/FontIcon';
import Waypoint from 'react-waypoint';
import classNames from 'classnames';

const iconStyles = {
  fontSize: null, // disable default inline styles
  lineHeight: null
};

export default class FeatureListItem extends Component {

  static propTypes = {
    feature: PropTypes.object.isRequired
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  };

  state = {
    visible: false
  };

  render() {
    // set icon color = primary theme color
    iconStyles.color = this.context.muiTheme.palette.primary1Color;

    let feature = this.props.feature;

    // enable raw html
    let descriptionHtml = { __html: feature.description };
    return (
      <li
        className={classNames({
          'animated': this.state.visible
        })}
        style={{
          opacity: 0
        }}
        >
        <Waypoint
          onEnter={this._handleWaypointEnter}
        />
        <FontIcon className="material-icons" style={iconStyles}>{feature.icon}</FontIcon>
        <h3>{feature.title}</h3>
        <p dangerouslySetInnerHTML={descriptionHtml}></p>
      </li>
    );
  }

  _handleWaypointEnter = () => {
    this.setState({visible: true});
  }

}
