const isEmpty = value => value === undefined || value === null || value === '';

export default {
  email: (value) => {
    // Let's not start a debate on email regex. This is just for an example app!
    if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return false;
  },
  required: (value) => {
    if (isEmpty(value)) {
      return false;
    }
  },
  minLength: (min) => {
    return value => {
      if (!isEmpty(value) && value.length < min) {
        return false;
      }
    };
  },
  maxLength: (max) => {
    return value => {
      if (!isEmpty(value) && value.length > max) {
        return false;
      }
    };
  },
  integer: (value) => {
    if (!Number.isInteger(Number(value))) {
      return false;
    }
  },
  match: (field) => {
    return (value, data) => {
      if (data) {
        if (value !== data[field]) {
          return false;
        }
      }
    };
  }
}
