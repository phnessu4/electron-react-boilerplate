// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Button } from 'antd';

import Home from '../components/Home';

const { Header, Footer, Content } = Layout;

type Props = {
  dispatch: () => {}
};

class HomePage extends Component<Props> {
  props: Props;

  onDispatch = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: {} });
  };

  render() {
    return (
      <Layout>
        <Header>Header</Header>
        <Content>
          <Button onClick={this.onDispatch}>123</Button>
          <Home />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default connect()(HomePage);
