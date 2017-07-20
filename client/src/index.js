import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store';
import PrivateRoute from './containers/PrivateRoute';
import Layout from './components/Layout';
import Home from './containers/Home';
import NewTicketPage from './containers/NewTicketPage';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ReduxToastr
        timeOut={3000}
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
      />
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/newTicket" component={NewTicketPage} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
