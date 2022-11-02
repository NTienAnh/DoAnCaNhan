import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers(), {}, applyMiddleware(sagaMiddleware));
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));
// file reducer sẽ rất dài pages nào cũng phải nhét vào đó > chia nhỏ nhét vô

sagaMiddleware.run(sagas);
// window.Storage = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
