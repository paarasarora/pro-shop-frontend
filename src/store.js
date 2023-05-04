import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer,productDetailtReducer } from './reducers/ProductReducer';
import { cartreducer } from './reducers/CartReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productDetail: productDetailtReducer,
    cart: cartreducer

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    cart: {cartItems : cartItemsFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store