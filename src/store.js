import { createStore, combineReducers } from "redux";

import uiReducer from './ui/reducer';
import authReducer from './auth/reducer'
import catsReducer from './cats/reducer'

const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    cats: catsReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;