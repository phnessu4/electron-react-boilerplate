import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import Router from '../router';

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
          <Router />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default connect()(Root);
