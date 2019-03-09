export const isDiscount = (isDiscount) => {
    console.log(isDiscount);
    return{
    type:'IS_DISCOUNT',
    payload:isDiscount
 };
};

export const totalAmount = (amount) => {
    return {
        type:'TOTAL_AMOUNT',
        payload:amount
    };
};