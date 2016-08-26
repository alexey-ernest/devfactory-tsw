/**
 * Demo video section component.
 */

// CSS
import * as styles from '../../sass/modules/demo-video.sass';

import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';

const customStyle = {
  // borderRadius: 0
};

const customBodyStyle = {
  padding: 0
};

const customContentStyle = {
  width: '960px',
  maxWidth: '100%'
};

export default class DemoVideoSection extends Component {

  state = {
    open: false
  };

  render() {
    return (
      <section className="demo-video">
        Check out
        <FloatingActionButton
          className="play-button"
          onTouchTap={this._handleOpen}
          >
          <FontIcon className="material-icons">play_arrow</FontIcon>
        </FloatingActionButton>
        5 min video
        <Dialog
          open={this.state.open}
          style={customStyle}
          contentStyle={customContentStyle}
          bodyStyle={customBodyStyle}
          modal={false}
          onRequestClose={this._handleClose}
        >
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/174002508?autoplay=1&title=0&amp;byline=0&amp;portrait=0"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>
        </Dialog>
      </section>
    );
  }

  _handleOpen = () => {
    this.setState({open: true});
  };

  _handleClose = () => {
    this.setState({open: false});
  };

}
