import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Toggle from 'material-ui/Toggle';
import {ListItem} from 'material-ui/List';

const ToggleOptions = (props) => {
  const { onToggle, primaryText, secondaryText, toggled, configProperty } = props;
  return (
    <div>
      <Divider/>
      <ListItem
        primaryText={primaryText}
        secondaryText={secondaryText}
        rightToggle={
          <Toggle
            onToggle={(e, checked) => onToggle(e, checked, configProperty, 'toggle')}
            toggled={toggled}
          />}
      />
    </div>
  );
};

ToggleOptions.propTypes = {
  onToggle: PropTypes.func,
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string,
  configProperty: PropTypes.string.isRequired,
  toggled: PropTypes.bool
};

export default ToggleOptions;