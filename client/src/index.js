import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import NewTicketPage from './containers/NewTicketPage';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <NewTicketPage />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
