import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';

import routes from './config';
import HomePage from '../viewController/HomePage';
import CounterPage from '../viewController/CounterPage';

class Root extends Component {
  static propTypes = {
    store: PropTypes.object,
    history: PropTypes.object
  };

  static defaultProps = {
    store: {},
    history: {}
  };

  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <Switch>
              <Route path={routes.COUNTER} component={CounterPage} />
              <Route path={routes.HOME} component={HomePage} />
            </Switch>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default connect()(Root);
