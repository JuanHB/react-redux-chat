import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Settings from 'material-ui/svg-icons/action/settings';
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import makeRoute from 'utils/route';
import './Header.scss';

class Header extends Component {

  renderTitle = () => this.isHome()
    ? "React Redux Chat"
    : "Config";

  renderMenuIcon = () => {
    return this.isHome() ? (
      <Link to={makeRoute('/config')} className='menu-icon'>
        <IconButton> <Settings/> </IconButton>
      </Link>
    ) : null;
  };

  renderArrowBackIcon = () => (
    <Link to={makeRoute('/')}>
      <IconButton> <ArrowBack/> </IconButton>
    </Link>
  );

  isHome = () => this.props.location.pathname === makeRoute('/');

  render() {
    return (
      <AppBar
        className="header"
        title={ this.renderTitle() }
        iconElementLeft={ this.renderArrowBackIcon() }
        showMenuIconButton={ !this.isHome() }
      >
        <div className='github-link'>
          <a href="https://github.com/juanhb/react-redux-chat" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        { this.renderMenuIcon() }
      </AppBar>
    );
  }

}

export default withRouter(Header);