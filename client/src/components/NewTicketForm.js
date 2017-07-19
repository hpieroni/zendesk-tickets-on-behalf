import React from 'react';
import { Field } from 'redux-form';
import FieldGroup from './FieldGroup';
import { Button } from 'react-bootstrap';
import MarkdownFormControl from './MarkdownFormControl';

const NewTicketForm = ({
  handleSubmit,
  onSubmit,
  submitting,
  pristine,
  description
}) =>
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
    <MarkdownFormControl
      name="description"
      label="Description(*)"
      text={description}
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
