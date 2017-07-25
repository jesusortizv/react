import React from 'react';
import { Layout, Transactions } from '../../components';
import Button from '../../components/Button/Button';
import moment from 'moment';
import { connect } from 'react-redux';

class TransactionsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      transactions: [],
    };
  }

  componentDidMount() {
    fetch('/api/transactions')
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          transactions: data.transactions,
        });
      });
  }

  render () {
    let currentDate = '';

    function isToday(dateStr) {
      return dateStr.toLowerCase() === 'now';
    }

    return (
      <Layout title="Transactions">
        <div className="Transactions main-content">
          <h1>Which bank does this account belong to?</h1>
          <p>Track all of your payments by connecting as many bank accounts as you'd like to your Nopa<br />
            account and get updates on your balance instantly. Plus it's free</p>
            <div className="Transactions__last">
              <p>Your transactions for the last 30 days</p>
              <div className="Transactions__list">
                <table className="table">
                  <tbody>
                    {
                      this.state.transactions.map((transaction) => {
                        const elements = [];

                        if (currentDate !== transaction.dateStr) {
                          currentDate = transaction.dateStr;
                          elements.push(<tr className="Transactions__list__item--highlight"><td colSpan={2} className="text-left">{ isToday(transaction.dateStr) ? 'Today' : transaction.dateStr }</td></tr>);
                        }

                        elements.push(<tr key={ transaction.id }>
                          <td className="text-left">{ transaction.beneficary }</td>
                          <td className="text-right">{ transaction.value }</td>
                        </tr>);

                        return elements;
                      })
                    }
                  </tbody>
                </table>
              </div>
              <Button>Show more</Button>
            </div>
        </div>
      </Layout>
    );
  }
}

export default TransactionsPage;
