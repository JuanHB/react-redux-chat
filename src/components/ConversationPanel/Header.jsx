import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Settings from 'material-ui/svg-icons/action/settings';

const Header = () => {
  return (
    <AppBar
      style={styles.appBar}
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

const styles = {
  appBar: {
    position: "fixed",
    top: 0
  },
};

export default Header;
