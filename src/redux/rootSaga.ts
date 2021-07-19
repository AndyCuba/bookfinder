import { all } from 'redux-saga/effects';

import { watchGetBooksData } from './sagas/getBooksDataSaga';

function* rootSaga() {
    yield all([
        watchGetBooksData(),
    ]);
};


export default rootSaga;