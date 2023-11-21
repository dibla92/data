import { createBrowserHistory } from 'history'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createReduxHistoryContext } from 'redux-first-history'
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk'

// import errorToastsMiddlerware from './middlewares/errorToasts.js'
import rootReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const historyApi = createBrowserHistory()

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: historyApi,
  oldLocationChangePayload: true,
})

export const store = createStore(
  combineReducers({
    router: routerReducer,
    ...rootReducer,
  }),
  composeWithDevTools(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(routerMiddleware, thunkMiddleware),
  ),
)

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store)
