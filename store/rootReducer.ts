import { combineReducers } from "redux";
import CartSlice from "./cart/CartSlice";
// import ThemeSlice from "./Theme/ThemeSlice";
// import OrderSlice from "./Orders/OrderSlice";
// import UserSlice from "./User/UserSlice";

const rootReducer = combineReducers({
  Cart: CartSlice,
});

export default rootReducer;
