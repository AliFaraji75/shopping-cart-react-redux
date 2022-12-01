import {combineReducers} from "redux"
import cartReducer from "./cart/cartReducer"
import productsReducer from "./products/productReducer"
 const rootDeducer =combineReducers({
    productState:productsReducer,
    cartState:cartReducer
})
export default rootDeducer