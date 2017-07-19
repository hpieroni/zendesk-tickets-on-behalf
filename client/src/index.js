import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';
import Layout from './components/Layout';
import Home from './components/Home';
import NewTicketPage from './containers/NewTicketPage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/newTicket" component={NewTicketPage} />
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
