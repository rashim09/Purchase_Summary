import React, { Component } from 'react';
import './App.css'
import getPricingData from '../src/DataSource/PricingData';
import PickupSaving from './components/PickupSavings';
import MoreInfo from './components/MoreInfo'
import TotalAmount from './components/TotalAmount';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: false,
      block2: false,
      response: {
        pricing: {
          subtotal: '',
          savings: '',
          tax: '',
          total: '',
          zip: ''
        },
        itemDetails: [{
          item_name: '',
          quantity: '',
          item_price: '',
          discounted_price: '',
          imagesrc: ''
        }]
      }
    };
  }

  toggle = (index) => () => {
    this.setState({ [`block${index}`]: !this.state[`block${index}`] });
  }

  toggleExpand = (expand = false) => () => {
    this.setState({
      block1: expand,
      block2: expand,
    });
  }

  getPricingData = (delay = 1000) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(this.pricingData)
      }, delay);
    })
  }

  async componentDidMount() {
    const response = await getPricingData();
    this.setState({ response });
  }

  render() {
    const accordionList = [{ title: 'See more details' }, { title: 'Apply promo code' }];
    return (

      <div className="container">
        <div className="price-summary">
          <div className="row">
            <div className="desc-column" >
              Subtotal
            </div>
            <div className="price-column">
              <strong>${this.state.response.pricing.subtotal}</strong>
            </div>
          </div>
          <div className="saving">
            <PickupSaving savings={this.state.response.pricing.savings} /></div>
          <div className="row">
            <div className="tax">
              Est. taxes and fees <br />(Based on {`${this.state.response.pricing.zip}`})
            </div>
            <div className="price-column">
              <strong>${this.state.response.pricing.tax}</strong>
            </div>
          </div>
        </div>
        <div className="hr"><hr /></div>
        <div className="total-amount" style={{ fontWeight: "bold" }}><TotalAmount amount={this.state.response.pricing.total} /></div>
        {
          accordionList.map((item, index) => (
            <MoreInfo Key={index} title={item.title} onClick={this.toggle(index + 1)} expand={this.state[`block${index + 1}`]} data={this.state.response} />
          ))
        }
      </div>
    );
  }
}

export default App;
