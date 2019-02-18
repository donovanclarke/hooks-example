import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer";

export default function configureStore(initialState) {
  //For Loging the REDUX actions
  const enhanceStore = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    enhanceStore(applyMiddleware(thunk)),
  );
}
