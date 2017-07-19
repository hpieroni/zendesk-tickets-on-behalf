import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import Layout from './components/Layout';
import NewTicketPage from './containers/NewTicketPage';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <NewTicketPage />
    </Layout>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
