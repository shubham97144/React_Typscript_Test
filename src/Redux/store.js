import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
// import { createBrowserHistory } from "history";

// import logger from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from './Sagas/index';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// if(process.env.NODE_ENV === 'development') {
//     middlewares.push(logger);
// }

// export const history = createBrowserHistory();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export default store;