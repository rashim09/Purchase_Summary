
const initialState = {
    data: '',
    discountedAmount: 0,
    isDiscount: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        // passing Mock resonse to file
        case 'TOTAL_AMOUNT':
            return {
                ...state,
                data: action.payload
            }
        case 'IS_DISCOUNT':
            //calculating updated amount when Promocode is applicable
            const updatedAmt = state.data.pricing.total - state.data.pricing.total * 0.1;
            return {
                ...state,
                isDiscount: action.payload,
                discountedAmount: updatedAmt
            }
        default:
            return state;
    }
};

export default reducer;