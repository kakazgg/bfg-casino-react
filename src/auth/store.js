import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import {sessionService} from 'redux-react-session';

const initialState = {};
const middlewares = [ReduxThunk];

const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));

sessionService.initSessionService(store);

export default store;