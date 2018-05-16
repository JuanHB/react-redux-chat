import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Settings from 'material-ui/svg-icons/action/settings';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import './Header.scss';

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

  renderArrowBackIcon() {
    return (
      <Link to="/">
        <IconButton> <ArrowBack/> </IconButton>
      </Link>
    );
  }

  render() {

    const { location } = this.props;

    return (
      <AppBar
        className="header"
        title={ this.renderTitle() }
        iconElementLeft={ this.renderArrowBackIcon() }
        iconElementRight={ this.renderMenuIcon() }
        showMenuIconButton={location.pathname !== '/'}
      />
    );
  }

}

export default withRouter(Header);