import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { isDiscount, totalAmount } from '../actions';


class PromoCodeDetails extends Component {
  state = {
    isOpen: 'false',
    textValue: '',
    isPromoValid: 'false',
    codeMessage: ''
  }

  toggle = () => this.setState(
    prevState => ({
      isOpen: !prevState.isOpen,
    }),
  );

  validatePromoCode = (value) => {
    if (value === 'DISCOUNT') {
      this.setState({ isPromoValid: 'true', codeMessage: 'Discount coupon applied' });
      this.props.isDiscount(this.state.isPromoValid);
      this.props.totalAmount(this.props.moreDetails.pricing.subtotal);

    } if (value !== 'DISCOUNT') {
      this.setState({ isPromoValid: 'false', codeMessage: 'Invalid coupon code' });
      this.props.isDiscount(this.state.isPromoValid);
      this.props.totalAmount(this.props.moreDetails.pricing.total);
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
      borderRadius: '10px',
      height: '30px',
      width: '80%',
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'black',
      fontSize: '20px'
    };
    return (
      <Fragment >
        <div style={{ marginTop: '20px', fontSize: '20px', color: '#626B7A' }}>Promocode </div>
        <div className="row">
          <div className="promo-input">
            <input
              style={{ outline: '2px solid #ccc', height: '28px', width: '100%' }}
              type="text"
              onChange={this.inputHandler.bind(this)}
              value={this.state.textValue}
            />
          </div>
          <div className="promo-btn-col">
            <div classname="promo-btn">
              <button style={style} onClick={() => this.validatePromoCode(this.state.textValue)}>Apply</button>
            </div>
          </div>
        </div>
        <div style={{ fontSize: '15px', color: 'blue' }}>{this.state.codeMessage}</div>

      </Fragment>
    );
  }
}

export default connect(null, { isDiscount, totalAmount })(PromoCodeDetails);

