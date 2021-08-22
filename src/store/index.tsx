/*
 * @Descripttion: 
 * @version: 
 * @Author: liangbule
 * @Date: 2021-08-22 18:41:30
 * @LastEditors: liangbule
 * @LastEditTime: 2021-08-22 19:49:28
 */

import { applyMiddleware, compose, createStore } from 'redux'
// import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers'

// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(promiseMiddleware),
//   // other store enhancers if any
// );

const store = createStore(reducers)

export default store;