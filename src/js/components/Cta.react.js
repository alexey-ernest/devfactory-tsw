/**
 * Cta component.
 */

// CSS
import * as styles from '../../sass/modules/cta-section.sass';

import React, {Component, PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import DemoForm from './DemoForm.react';
import UrgencyStatement from './UrgencyStatement.react';

const cardTextStyle = {
  fontSize: 'inherit',
  lineHeight: 'inherit'
};

export default class Cta extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="cta-section">
        <Card>
          <CardHeader
            title="Demo Request Form"
          />
          <CardText style={cardTextStyle}>
            <DemoForm demo={this.props.data.demo} />
            <UrgencyStatement />
          </CardText>
        </Card>
      </div>
    );
  }

}
