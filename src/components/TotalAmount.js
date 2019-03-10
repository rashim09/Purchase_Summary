import React from 'react';
import { connect } from 'react-redux';
import { totalAmount } from '../actions';
import '../container/PurchaseSummary.css';

const TotalAmount = (props) => {
	if (!props.isDiscount)
		return (
			<div >
				${props.amount}
			</div>
		)
	return (
		<div>
				${props.updatedAmount}
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