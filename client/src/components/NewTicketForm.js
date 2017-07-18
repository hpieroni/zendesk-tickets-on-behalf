import React from 'react';
import { Field } from 'redux-form';

const NewTicketForm = ({ handleSubmit, onSubmit, submitting, pristine }) =>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Requester Email</label>
      <div>
        <Field
          name="email"
          component="input"
          type="email"
          placeholder="Requester Email"
        />
      </div>
    </div>
    <div>
      <label>Subject</label>
      <div>
        <Field
          name="subject"
          component="input"
          type="textarea"
          placeholder="Subject"
        />
      </div>
    </div>
    <div>
      <label>Description</label>
      <div>
        <Field
          name="description"
          component="textarea"
          placeholder="Description"
        />
      </div>
    </div>
    <button type="submit" disabled={pristine || submitting}>
      Submit
    </button>
  </form>;

export default NewTicketForm;
