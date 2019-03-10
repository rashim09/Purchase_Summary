import React, { Fragment } from 'react';
import '../container/PurchaseSummary.css';

const ItemDetails = (props) => {
  const itemList = props.moreDetails.itemDetails;
  return (  
    <Fragment>
      {
        itemList.map((item, index) => (
          <div className="itemrow" key={index}>
            <input
              type="image"
              src={item.imagesrc}
              alt="ItemImage"
              width="150"
              height="120"
            />
            <div className="qty" style={{ paddingLeft: '30px' }}>
              {item.item_name}
              <div className="itemrow">
                <strong style={{ margin: '-20px' }}>${item.discounted_price}</strong>
                Qty: {item.quantity}
              </div>
              <div style={{ color: '#A9A9A9' }}><strike><strong>${item.item_price}</strong></strike></div>
            </div>
          </div>
        ))
      }
    </Fragment>
  );
}


export default ItemDetails;