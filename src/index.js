import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import counterReducer from "./store/reducers/counter";
import resultReducer from "./store/reducers/result";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultReducer,
});

// This is the middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware Dispatching]");
      console.log(action);
      const result = next(action);
      console.log("[Middleware] next state");
      console.log(store.getState());
      return result;
    };
  };
};

// variable to set up redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store for redux, init middleware and redux dev tools
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
