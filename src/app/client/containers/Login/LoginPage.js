import React from 'react';
import { Layout, LoginForm } from '../../components';
import { connect } from 'react-redux';
import Validations from '../../utils/validation.js';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        surname: '',
        sortCode: '',
        accountNumber: '',
        passCode: '',
        memorableWord: '',
      },
      errors: {
        surname: false,
        sortCode: false,
        accountNumber: false,
        passCode: false,
        memorableWord: false,
      },
    };
  }

  render() {
    const inputsMap = {
      surname: {
        label: 'Surname',
        name: 'surname',
        rules: [
          'required',
        ],
      },
      sortCode: {
        label: 'Sort code',
        name: 'sortCode',
        rules: [
          'required',
          'integer',
        ],
      },
      accountNumber: {
        label: 'Account number',
        name: 'accountNumber',
        rules: [
          'required',
          'integer',
        ],
      },
      passCode: {
        label: 'Pass code',
        name: 'passCode',
        rules: [
          'required',
          'integer',
        ],
      },
      memorableWord: {
        label: 'Memorable Word',
        name: 'memorableWord',
        rules: [
          'required',
        ],
      },
    };
    return (
      <Layout title="Login to Bank">
        <div className="main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd<br />
            like to your Nopa account and get updates on your balance instantly. Plus it's free.</p>

            <LoginForm
              handleChange={
                (e) => {
                  const name = e.target.name;
                  const value = e.target.value;

                  this.setState({
                    fields: Object.assign({}, this.state.fields, {
                      [name]: value,
                    }),
                  });

                  const thereIsAnError = inputsMap[name].rules.some((rule) => {
                    return Validations[rule](value) === false;
                  });

                  this.setState({
                    errors: Object.assign({}, this.state.errors, {
                      [name]: thereIsAnError,
                    }),
                  });
                }
              }
              handleSubmit={
                (e) => {
                  e.preventDefault();
                  const canSubmit = Object.keys(this.state.errors).every((key) => {
                    return !this.state.errors[key];
                  });

                  if (canSubmit) {
                    e.target.submit();
                  }

                }
              }
              errors={this.state.errors}
              values={this.state.fields}
              fields={inputsMap}/>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBanks : state.bankReducer,
  };
};

// Use named export for unconnected component (for tests)
export { LoginPage };
export default connect(mapStateToProps, null)(LoginPage);
