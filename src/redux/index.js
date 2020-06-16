import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

//redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducers from './rootReducers'

const persistConfig = {
  key: 'root',
  storage
} 

const persistedReducer = persistReducer(persistConfig, rootReducers)

let storeEnhancers
if (process.env.NODE_ENV === 'production') {
  storeEnhancers = compose(applyMiddleware(thunk))
} else {
  // storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk, logger)))
  storeEnhancers = compose(composeWithDevTools(applyMiddleware(thunk)))
}

export const store = createStore(persistedReducer,  storeEnhancers)
export const persistor = persistStore(store)

// const configureStore = (initialState = {}) => {
//   const store = createStore(persistedReducer, initialState, storeEnhancers)
//   const persistor = persistStore(store)

//   if (module.hot && process.env.NODE_ENV !== 'production') {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./rootReducers', () => {
//       console.log('replacing reducer...')
//       const nextRootReducer = require('./rootReducers').default
//       store.replaceReducer(nextRootReducer)
//     })
//   }

//   return {store, persistor}
// }

//export default {store, persistor}
