import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Alert
} from 'react-bootstrap';

const getValidationState = meta =>
  meta.error && meta.touched ? 'error' : null;

const FieldGroup = ({
  label,
  help,
  type,
  input: { value, onChange, onBlur, name },
  componentClass,
  meta,
  validationState = getValidationState(meta)
}) =>
  <FormGroup controlId={name} validationState={validationState}>
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
    {validationState === 'error' &&
      <HelpBlock>
        <Alert bsStyle="danger">
          {meta.error}
        </Alert>
      </HelpBlock>}
  </FormGroup>;

export default FieldGroup;
