import { 
    call, 
    put, 
    SagaReturnType, 
    takeLatest 
} from 'redux-saga/effects';

import { getBooksData } from '../../services/api/booksApi';

import { 
    GET_DATA_REQUESTED, 
    requestDataError, 
    requestDataSuccess 
} from '../reducers/booksDataReducer/booksDataReducer';

import { RequestDataActionType } from '../reducers/booksDataReducer/booksDataTypes';

// Define result of saga call
type GetBooksDataType = SagaReturnType<typeof getBooksData>;

// Recieve books data from google api
function* getBooksDataSaga(action: RequestDataActionType) {
    try {
        const data: GetBooksDataType = yield call(getBooksData, action.payload);
        yield put(requestDataSuccess(data));
    } catch (error) {
        yield put(requestDataError(error));
    };
};

// Watch latest data request
function* watchGetBooksData() {
    yield takeLatest(GET_DATA_REQUESTED, getBooksDataSaga);
};

export { watchGetBooksData };