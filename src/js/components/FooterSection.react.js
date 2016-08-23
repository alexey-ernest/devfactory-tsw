/**
 * Footer section component.
 */

import React, {Component} from 'react';

export default class FooterSection extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="brand-image">Testing Service by DevFactory</div>
        <div className="footer-menu">
          <a href="https://devfactory.zendesk.com/">Help Center</a>
        </div>
      </footer>
    );
  }

}
