import React, { Component } from 'react';
import './MoreInfo.css';
import PromoCodeDetails from './PromoCodeDetails';
import ItemDetails from './ItemDetails'


class MoreInfo extends Component {
  handler() {
    if (this.props.title === 'See more details') {
      return <ItemDetails moreDetails={this.props.data} />
    } else if (this.props.title === 'Apply promo code') {
      return <PromoCodeDetails moreDetails={this.props.data} />
    }
  }

  render() {
    let { title, expand, onClick } = this.props;
    if (title === 'See more details') {
      if (expand ? title = 'Hide item details' : title);
    } else if (title === 'Apply promo code') {
      if (expand ? title = 'Hide promo code' : title);
    }

    return (
      <div className="accordion">
        <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
          <u>{title}</u>
        </dt>
        <dd className={expand ? 'content is-expanded' : 'content'}>
          {this.handler()}
        </dd>
      </div>
    );

  }
}

export default MoreInfo;

