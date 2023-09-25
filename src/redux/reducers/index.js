import { combineReducers } from "redux";
import {productReducer , selectProductReducer} from './productReducers'

const rootReducer  = combineReducers({
    allproducts : productReducer,
    product : selectProductReducer
})

export default rootReducer