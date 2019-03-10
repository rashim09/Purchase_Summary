import getPricingData from '../DataSource/PricingData';

export const isDiscount = (isDiscount) => {
    console.log(isDiscount);
    return{
    type:'IS_DISCOUNT',
    payload:isDiscount
 };
};

// const response = getPricingData();
// export const totalAmount = () => {
//     return {
//         type:'TOTAL_AMOUNT',
//         payload:response
//     };
// };


export const totalAmount = () => async dispatch => {
    const response = await getPricingData();
    console.log(response);
    dispatch({ type:'TOTAL_AMOUNT', payload:response})
};

