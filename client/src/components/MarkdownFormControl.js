import React from 'react';
import { Field } from 'redux-form';
import { Tabs, Tab } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import FieldGroup from './FieldGroup';

const markdownHelp = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="12"
      viewBox="0 0 208 128"
    >
      <mask id="a">
        <rect width="100%" height="100%" fill="#fff" />
        <path d="M30 98v-68h20l20 25 20-25h20v68h-20v-39l-20 25-20-25v39zM155 98l-30-33h20v-35h20v35h20z" />
      </mask>
      <rect width="100%" height="100%" ry="15" mask="url(#a)" />
    </svg>
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
