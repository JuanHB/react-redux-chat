import React from 'react';
import PropTypes from 'prop-types';
import SubHeader from 'material-ui/Subheader';
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton';
import  './RadioOptions.scss';

const RadioOptions = (props) => {

  const { label, options, selected, configProperty, onChange } = props;

  const renderRadioOptions = () => {
    return options.map((option, i) => (
      <RadioButton
        key={i}
        label={option.label}
        value={option.value}
        className='radio'
      />
    ));
  };

  return (
    <div>
      <SubHeader> { label } </SubHeader>
      <RadioButtonGroup
        name={['selected-', label.replace(/\s/g,'')].join('')}
        onChange={(event, value) => onChange(event, value, configProperty )}
        defaultSelected={selected}
        className='radio-group'
      >
        { renderRadioOptions() }
      </RadioButtonGroup>
    </div>
  )
};

RadioOptions.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  selected: PropTypes.string.isRequired,
  configProperty: PropTypes.string
};

export default RadioOptions;
