// import * as actionTypes from '../actions';


const initialState={
    discountedAmount:0,
    isDiscount:''
}

const reducer=(state=initialState,action)=>{
    console.log('inshg');
    switch(action.type){
    case 'TOTAL_AMOUNT':
        return {...state, discountedAmount:action.payload} 
    case 'IS_DISCOUNT'  :
    // return {...state, isDiscount:action.payload,discountedAmount:654543}
        const updatedAmt=state.discountedAmount*0.1 + state.discountedAmount;
        return {...state, isDiscount:action.payload,discountedAmount:updatedAmt}
    default:
    return state;
}
};

 export default reducer;