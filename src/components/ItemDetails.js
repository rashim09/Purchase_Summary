import React, { Component, Fragment } from 'react';

class ItemDetails extends Component {
  state = {
    isOpen: 'false'
  }

  toggle = () => this.setState(
    prevState => ({
      isOpen: !prevState.isOpen,
    }),
  );

  render() {
    const itemList = this.props.moreDetails.itemDetails;
    return (
      <Fragment>
        {
          itemList.map((item, index) => (
            <p>
              <div>
                <input
                  type="image"
                  src={item.imagesrc}
                  alt="ItemImage"
                  width="120"
                  height="120"
                />
                <div className="item-col">{item.item_name}
                  <div className='row' style={{ height: 20 }}>
                    <div className="discount-col"><strong>${item.discounted_price}</strong></div>
                    <div className="price-column">Qty: {item.quantity}</div>
                  </div>
                  <div className="row" style={{ color: '#626B7A' }}><strike><strong>${item.item_price}</strong></strike></div>
                </div>
              </div>
            </p>
          ))
        }

      </Fragment>
    );
  }
}

export default ItemDetails;