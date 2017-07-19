import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';

const FieldGroup = ({
  label,
  help,
  type,
  input: { value, onChange, onBlur, name },
  componentClass
}) =>
  <FormGroup controlId={name}>
    <ControlLabel>
      {label}
    </ControlLabel>
    <FormControl
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      name={name}
      componentClass={componentClass}
    />
    {help &&
      <HelpBlock>
        {help}
      </HelpBlock>}
  </FormGroup>;

export default FieldGroup;
