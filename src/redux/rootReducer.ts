import { combineReducers } from 'redux';
import { booksDataReducer } from './reducers/booksDataReducer/booksDataReducer';


const rootReducer = combineReducers({
    booksData: booksDataReducer
});

export default rootReducer;