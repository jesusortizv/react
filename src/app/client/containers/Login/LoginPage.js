import React from 'react';
import { Layout, LoginForm } from '../../components';
import { connect } from 'react-redux';

const LoginPage = (props) => {
  return (
    <Layout>
      <div className="main-content">
        <h1>Which bank does this account belong to?</h1>
        <p>Track all of your payments by connecting as many bank accounts as you'd<br />
          like to your Nopa account and get updates on your balance instantly. Plus it's free.</p>

          <LoginForm
            handleChange={() => {}}
            handleSubmit={() => {}}
            errors={{}} />
      </div>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    selectedBanks : state.bankReducer,
  };
};

export default connect(mapStateToProps, null)(LoginPage);
