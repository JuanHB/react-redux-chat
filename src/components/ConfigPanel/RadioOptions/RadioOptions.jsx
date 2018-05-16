import React from 'react';
import PropTypes from 'prop-types';

import SubHeader from 'material-ui/Subheader';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';

const RadioOptions = (props) => {

  const { label, options, selected, onChange } = props;

  return (
    <div>
      <SubHeader> { label } </SubHeader>
      <RadioButtonGroup
        name={() => ['selected-', label.replace(/\s/g,'')].join('')}
        onChange={(e) => onChange(e)}
        defaultSelected={selected}
        className="radio-group">
        { options.map((option, i) => {
            return <RadioButton
              key={i}
              label={option.label}
              value={option.value}
              className="radio"
            />
          })
        }
      </RadioButtonGroup>
    </div>
  )
};

RadioOptions.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
};

export default RadioOptions;
