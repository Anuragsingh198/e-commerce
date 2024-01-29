import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  ProductListReducer,
  ProductDetailsReducres,
} from "./reducers/productreducers";
import { userLoginReducer } from "./reducers/userReducers";
import { Cartreducer } from "./reducers/CartReducer";

const cartItemsFromStorage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [];
console.log("cartItemsFromStorage:", cartItemsFromStorage);

const UserloginInfoFromStorage = localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem('userInfo')):null
console.log("UserloginInfoFromStorage:", UserloginInfoFromStorage);

// Combine your reducers
const reducer = combineReducers({
  productList: ProductListReducer,
  ProductDiscription: ProductDetailsReducres,
  userLogin:userLoginReducer,
  Cart: Cartreducer,
});

// Define your initial state
const initialState = {
  Cart: { cartItems: cartItemsFromStorage },
  userLogin :{userInfo: UserloginInfoFromStorage},
  // Cart: { cartItems: "anurag" },
};
const middleware = [thunk];

// Create the Redux store with initial state
const store = createStore( 
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
