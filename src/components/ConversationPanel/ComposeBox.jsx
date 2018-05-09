import React from 'react';

import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';

const ComposeBox = () => {
  return (
    <Paper style={styles.paper}>
      <input type="text" style={styles.inputText} />
      <IconButton>
        <Send/>
      </IconButton>
    </Paper>
  );
};

const styles = {
  paper: {
    position: "fixed",
    zIndex: 100,
    bottom: 0,
    left: 0,
    width: "100%",
    //padding: 8,
    height: 50
  },
  inputText: {
    width: "80%",
    //height: 30,
    fontSize: 15,
    //padding: 2,
    border: "white"
  }
};

export default ComposeBox;