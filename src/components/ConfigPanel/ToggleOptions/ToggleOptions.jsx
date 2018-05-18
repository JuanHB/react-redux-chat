import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import {ListItem} from 'material-ui/List';

const ToggleOptions = (props) => {

  const { onToggle, primaryText, secondaryText, defaultToggled, configProperty } = props;

  return (
    <div>
      <Divider/>
      <ListItem
        primaryText={primaryText}
        secondaryText={secondaryText}
        rightToggle={
          <Toggle
            onToggle={(e, checked) => onToggle(e, checked, configProperty)}
            defaultToggled={defaultToggled}
          />}
      />
    </div>
  );
};

ToggleOptions.propTypes = {
  onToggle: PropTypes.func,
  secondaryText: PropTypes.string,
  defaultToggled: PropTypes.bool,
  primaryText: PropTypes.string.isRequired,
  configProperty: PropTypes.string.isRequired
};

export default ToggleOptions;