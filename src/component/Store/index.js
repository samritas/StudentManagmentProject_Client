import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Optional: for Redux DevTools
import {thunk} from "redux-thunk"; // Middleware for async actions
import rootReducer from "../RootReducer";

const store = createStore(
  rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
);

export default store;
