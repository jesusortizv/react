import React from 'react';
import { TextInput } from '../';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {
          Object.keys(this.props.fields).map((key, index) => {
            return (
              <TextInput
              key={index}
              name={this.props.fields[key].name}
              label={this.props.fields[key].label}
              value={this.props.values[key]}
              handleChange={this.props.handleChange}
              errors={this.props.errors[key]} />
            )
          })
        }
        <input className="button" type="submit" value="Login &amp; connect" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object

};

export default LoginForm;
