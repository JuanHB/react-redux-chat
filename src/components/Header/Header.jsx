import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Settings from 'material-ui/svg-icons/action/settings';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import './Header.scss';

class Header extends Component {

  renderTitle = () => this.isHome()
    ? "React Redux Chat"
    : "Config";

  renderMenuIcon = () => {
    return this.isHome() ? (
      <Link to="/config">
        <IconButton> <Settings/> </IconButton>
      </Link>
    ) : null;
  };

  renderArrowBackIcon = () => (
    <Link to="/">
      <IconButton> <ArrowBack/> </IconButton>
    </Link>
  );

  isHome = () => this.props.location.pathname === "/";

  render() {
    return (
      <AppBar
        className="header"
        title={ this.renderTitle() }
        iconElementLeft={ this.renderArrowBackIcon() }
        iconElementRight={ this.renderMenuIcon() }
        showMenuIconButton={ !this.isHome() }
      />
    );
  }

}

export default withRouter(Header);