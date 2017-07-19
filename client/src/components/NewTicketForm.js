import React from 'react';
import { Field } from 'redux-form';
import FieldGroup from './FieldGroup';
import { Button } from 'react-bootstrap';

const NewTicketForm = ({ handleSubmit, onSubmit, submitting, pristine }) =>
  <form onSubmit={handleSubmit}>
    <Field
      name="email"
      component={FieldGroup}
      type="email"
      label="Requester Email(*)"
    />
    <Field
      name="subject"
      component={FieldGroup}
      type="text"
      label="Subject(*)"
    />
    <Field
      name="description"
      component={FieldGroup}
      label="Description(*)"
      componentClass="textarea"
    />
    <Button
      type="submit"
      bsStyle="primary"
      bsSize="large"
      disabled={pristine || submitting}
    >
      Submit
    </Button>
  </form>;

export default NewTicketForm;
