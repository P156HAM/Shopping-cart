const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-PRODUCT': {
            return{
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]   
            }
        }
        default:
            return state;
    }
}

export { cartReducer };