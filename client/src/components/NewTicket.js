import React from 'react';
import { Field } from 'redux-form';
import FieldGroup from './FieldGroup';
import { Button } from 'react-bootstrap';
import { required, email } from '../utils/validators';
import MarkdownFormControl from './MarkdownFormControl';

const NewTicket = ({ handleSubmit, submitting, description }) =>
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={FieldGroup}
      type="email"
      label="Customer Email(*)"
      validate={[required, email]}
    />
    <Field
      name="subject"
      component={FieldGroup}
      type="text"
      label="Subject(*)"
      validate={required}
    />
    <MarkdownFormControl
      name="description"
      label="Description(*)"
      text={description}
      validate={required}
    />
    <Button
      type="submit"
      bsStyle="primary"
      bsSize="large"
      disabled={submitting}
    >
      CREATE
    </Button>
  </form>;

export default NewTicket;
