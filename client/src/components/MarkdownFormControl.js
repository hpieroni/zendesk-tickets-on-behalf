import React from 'react';
import { Field } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import markdownLogo from '../assets/markdown.svg';
import FieldGroup from './FieldGroup';

const markdownHelp = (
  <div>
    <img src={markdownLogo} alt="markdown logo" />
    <a
      href="https://guides.github.com/features/mastering-markdown/"
      target="_new"
    >
      Styling with Markdown is supported
    </a>
  </div>
);

const MarkdownFormControl = ({ name, text = '', label, validate }) =>
  <Tabs defaultActiveKey={1} id={`markdown-control-${name}`}>
    <Tab eventKey={1} title={label}>
      <Field
        name={name}
        component={FieldGroup}
        componentClass="textarea"
        help={markdownHelp}
        validate={validate}
      />
    </Tab>
    <Tab eventKey={2} title="Preview" disabled={!text}>
      <ReactMarkdown source={text} />
    </Tab>
  </Tabs>;

export default MarkdownFormControl;
