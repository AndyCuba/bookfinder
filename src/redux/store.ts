import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    applyMiddleware(sagaMiddleware)
];

const composedEnhancers = composeWithDevTools(
    ...middlewares
);

const store = createStore(
    rootReducer,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

// REDUX APPLICATION STATE TYPE
type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

// USESELECTOR TYPE
export type RootState = ReturnType<typeof store.getState>;

// DISPATCH TYPE
export type AppDispatch = typeof store.dispatch;

export default store;