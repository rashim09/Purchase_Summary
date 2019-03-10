import React, { Component } from 'react';
import './PurchaseSummary.css';
import { connect } from 'react-redux';

import { isDiscount, totalAmount } from '../actions';
import PickupSaving from '../components/PickupSavings';
import MoreInfo from '../components/MoreInfo'
import TotalAmount from '../components/TotalAmount';


class PurchaseSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			block1: false,
			block2: false,
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

	// Calling Response from Store using totalAmont Action
	componentDidMount() {
		this.props.totalAmount();
	}

	render() {
		//Guard check:- making sure complete data is available from store
		if (!this.props.response) {
			return null;
		}
		const accordionList = [{ title: 'See more details' }, { title: 'Apply promo code' }];
		return (
			<div className="purchase_container">
				<div className="itemrow">
					Subtotal
                    <strong>${this.props.response.pricing.subtotal}</strong>
				</div>
				<PickupSaving savings={this.props.response.pricing.savings} />
				<div className="itemrow">
					Est. taxes and fees <br />(Based on {`${this.props.response.pricing.zip}`})
                <strong>${this.props.response.pricing.tax}</strong>
				</div>
				<div className="itemrow" style={{ 'fontWeight': 'bold', fontSize: '30px', marginTop: '50px' }}>
					<strong>Est total</strong>
					<TotalAmount amount={this.props.response.pricing.total} />
				</div>
				<hr className="hr" />
				{
					accordionList.map((item, index) => (
						<MoreInfo
							key={index}
							title={item.title}
							onClick={this.toggle(index + 1)}
							expand={this.state[`block${index + 1}`]}
							data={this.props.response} />
					))
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		response: state.reducer.data
	};
};
export default connect(mapStateToProps, { isDiscount, totalAmount })(PurchaseSummary);
