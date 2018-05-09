import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';

const Header = () => {
  return (
    <AppBar
      title="React WS Chat v0.1"
      showMenuIconButton={false}
      iconElementRight={
        <IconButton>
          <Settings/>
        </IconButton>
      }
    />
  );
};

export default Header;
