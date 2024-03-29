import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/CartConstant";

export const Cartreducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; 
      console.log(item);
      console.log('Type of cartItems:', typeof state.cartItems);
      console.log(`cartitems_reducer : ${item.product}`);
      const existsItem = state.cartItems.find((x) => x.product === item.product);
      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.product === existsItem.product ? item : x)),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems:state.cartItems.filter((x) => x.product !==  action.payload),
      };
    default:
      return state;
  }
};