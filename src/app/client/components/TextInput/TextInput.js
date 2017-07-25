import React from 'react';

const TextInput = (props) => {
  return (
    <div className="form-input">
      <label
        htmlFor={props.name}>
        {props.label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.label}
        onBlur={props.handleChange}
        data-error={props.errors} />
      {
        props.errors ?
          <div className="form-input__error">
            <strong>Warning!</strong> There is an error.
          </div> : ''
      }

    </div>
  );
};

TextInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  password: React.PropTypes.bool,
  errors: React.PropTypes.bool
};

export default TextInput;
