/**
 * Footer section component.
 */

// CSS
import * as styles from '../../sass/modules/footer.sass';

import React, {Component} from 'react';

export default class FooterSection extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <div className="brand-image">Testing Service by DevFactory</div>
          <div className="footer-menu">
            <a href="https://devfactory.zendesk.com/">Help Center</a>
          </div>
        </div>
      </footer>
    );
  }

}
