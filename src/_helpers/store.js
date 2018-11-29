import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../_redux/_reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();

export default function configureStore(initialState){
  const finalCreateStore = compose(
      applyMiddleware(loggerMiddleware, thunkMiddleware),
  )(createStore);
  const store = finalCreateStore(rootReducer, initialState);
  
  return store;
}