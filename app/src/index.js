import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Router from './router/index';
import { configureStore, history } from './viewModel/store/configureStore';
import '../electron/app.global.css';
import './index.css';

const store = configureStore();

render(
  <AppContainer>
    <Router store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

// 热加载
if (module.hot) {
  module.hot.accept('./router/index', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./router/index').default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
