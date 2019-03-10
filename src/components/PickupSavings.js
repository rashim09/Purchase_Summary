import React from 'react';
import Tooltip from './ToolTip';
import '../container/PurchaseSummary.css';

const PickupSavings = (props) => {
	return (
		<div className="itemrow">
			<Tooltip message={'Picking up your order in the store helps cut costs, and we pass the savings on to you'} position={'bottom'}>Pickup savings</Tooltip>
			<strong style={{ color: 'red' }}>-${props.savings}</strong>
		</div>
	);
}

export default PickupSavings;