import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import NewTicketForm from './containers/NewTicketForm';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <NewTicketForm />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
