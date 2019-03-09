import React from 'react';
import { connect } from 'react-redux';
import { totalAmount } from '../actions';

const TotalAmount = (props) => {
	if (!props.isDiscount)
		return (
			<div className="row">
				<div className="desc-column" style={{ fontSize: '22px' }} >
					Est. total
        </div>
				<div className="price-column" style={{ fontSize: '30px', height: '20px' }}>
					<strong>$</strong>{props.amount}
				</div>
			</div>
		)

	return (
		<div className="row">
			<div className="desc-column">
			Est. total
        </div>
			<div className="price-column" >
				<strong>$</strong>{props.updatedAmount}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		updatedAmount: state.reducer.discountedAmount,
		isDiscount: state.reducer.isDiscount
	};
};
export default connect(mapStateToProps, { totalAmount })(TotalAmount);