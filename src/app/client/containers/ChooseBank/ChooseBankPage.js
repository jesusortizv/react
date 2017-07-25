import React from 'react';
import { Layout, Button } from '../../components';
import * as Paths from '../../constants/paths';
import { selectBank } from '../../redux/actions/actionTypes.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const bankList = [{
  name: 'Barclays',
  logo: require('../../../static/images/Barclays.png')
},
  {
    name: 'Natwest',
    logo: require('../../../static/images/LogoNatwest.png')
  },
  {
    name: 'Lloyds',
    logo: require('../../../static/images/LogoLloyds.png')
  },
  {
    name: 'HSBC',
    logo: require('../../../static/images/LogoHSBC.png')
  },
  {
    name: 'TSB',
    logo: require('../../../static/images/LogoTSB.png')
  },
  {
    name: 'Santander',
    logo: require('../../../static/images/LogoSantander.png')
  }
];

class ChooseBankPage extends React.Component {

  constructor(props) {
    super(props);
  }

  chooseBank(bank) {
    this.props.selectBank(bank);
    this.context.router.push('/login');
  }

  render () {
    return (
      <Layout title="Choose Bank">
        <div className="main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
            account and get updates on your balance instantly.</p>
          <div className="bank-list">
              {
                bankList.map((bank, index) => <div onClick={this.chooseBank.bind(this, bank)} key={index}><img alt={bank.name} src={bank.logo} /></div>)
              }
          </div>
          <Button to={Paths.LOGIN_BANK} className="button">Get started</Button>
        </div>
      </Layout>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return({
    selectBank: (bank) => {
      dispatch(selectBank(bank));
    },
  });
}

// Use named export for unconnected component (for tests)
export { ChooseBankPage };
export default connect(null, mapDispatchToProps)(ChooseBankPage);

ChooseBankPage.contextTypes = {
  router: React.PropTypes.object.isRequired
}
