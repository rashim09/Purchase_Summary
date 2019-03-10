import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './PurchaseSummary.css';
import { isDiscount, totalAmount } from '../actions';


class PromoCodeDetails extends Component {
  state = {
    textValue: '',
    isPromoValid: 'false',
    codeMessage: ''
  }

  // Check Discount is applicable or not
  validatePromoCode = (value) => {
    if (value === 'DISCOUNT') {
      this.setState({ isPromoValid: 'true', codeMessage: 'Discount coupon applied' });
      this.props.isDiscount(this.state.isPromoValid);
    } if (value !== 'DISCOUNT') {
      this.setState({ isPromoValid: 'false', codeMessage: 'Invalid coupon code' });
    }
    if (value === '') {
      this.setState({ isPromoValid: 'false', codeMessage: '' });
    }
  }

  inputHandler = (event) => {
    this.setState({ textValue: event.target.value })
  }
  render() {
    const style = {
      borderRadius: '12px',
      height: '30px',
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'black',
      fontSize: '20px'
    };
    return (
      <Fragment >
        <div style={{ margin: '20px', fontSize: '20px', color: '#626B7A' }}>
          Promocode
        </div>
        <div className="itemrow">
          <input
            style={{ outline: '2px solid #ccc', width: '70%' }}
            type="text"
            onChange={this.inputHandler.bind(this)}
            value={this.state.textValue}
          />
          <button style={style} onClick={() => this.validatePromoCode(this.state.textValue)}>Apply</button>
        </div>
        <div style={{ fontSize: '15px', color: 'blue', marginLeft: '20px' }}>{this.state.codeMessage}</div>
      </Fragment>
    );
  }
}

export default connect(null, { isDiscount, totalAmount })(PromoCodeDetails);

