import React from 'react';
import Tooltip from './ToolTip';
import '../App.css';

const PickupSavings = (props) => {
	return (
		<div>
			<div className="row">
				<div className="desc-column">
					<Tooltip message={'Picking up your order in the store helps cut costs, and we pass the savings on to you'} position={'bottom'}>Pickup savings</Tooltip>
				</div>
				<div className="price-column">
					<strong style={{ color: 'red' }}>-${props.savings}</strong>
				</div>
			</div>
		</div>
	);
}

export default PickupSavings;