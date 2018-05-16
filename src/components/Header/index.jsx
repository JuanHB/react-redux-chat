import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import {Link, withRouter} from 'react-router-dom';

class Header extends Component {

  renderTitle() {
    const { location } = this.props;
    switch (location.pathname) {
      case "/config":
        return "Config";
      default:
        return "React WS Chat v0.1";
    }
  }

  renderMenuIcon() {
    const { location } = this.props;
    return location.pathname === '/' ? (
      <Link to="/config">
        <IconButton> <Settings/> </IconButton>
      </Link>
    ) : null;
  }

  render() {

    const { location } = this.props;

    return (
      <AppBar
        style={styles.appBar}
        title={this.renderTitle()}
        showMenuIconButton={location.pathname !== '/'}
        iconElementLeft={
          <Link to="/">
            <IconButton> <ArrowBack/> </IconButton>
          </Link>
        }
        iconElementRight={ this.renderMenuIcon() }
      />
    );
  }

}

const styles = {
  appBar: {
    position: "fixed",
    top: 0
  },
};

export default withRouter(Header);
