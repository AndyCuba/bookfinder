import { getUniqueBooks } from '../../../helpers/helpers';
import { 
    IinitialBooksStateType,
    RequestDataActionType,
    RequestDataSuccessActionType,
    RequestDataFailedActionType,
    ActionsTypes,
    SetSearchfieldActionType,
    SetCategoryActionType,
    SetSortingActionType,
    ChangeOffsetActionType,
    RequestDataSuccessPayloadType,
    ResetBooksStateActionType
} from './booksDataTypes';

// ACTIONS
const GET_DATA_REQUESTED = 'BOOKS/GET_DATA_REQUESTED';
const GET_DATA_SUCCEDED = 'BOOKS/GET_DATA_SUCCEDED';
const GET_DATA_FAILED = 'BOOKS/GET_DATA_FAILED';
const SET_SEARCHFIELD = 'BOOKS/SET_SEARCHFIELD';
const SET_CATEGORY = 'BOOKS/SET_CATEGORY';
const SET_SORTING = 'BOOKS/SET_SORTING';
const CHANGE_OFFSET = 'BOOKS/CHANGE_OFFSET';
const RESET_BOOKSSTATE = 'BOOKS/RESET_BOOKSSTATE';

// ACTION CREATORS
const requestData = (searchText: string, sorting: string, offset: number): RequestDataActionType  => ({
    type: GET_DATA_REQUESTED,
    payload: {
        searchText,
        sorting,
        offset
    }
});

const requestDataSuccess = (booksData: RequestDataSuccessPayloadType): RequestDataSuccessActionType => ({
    type: GET_DATA_SUCCEDED, 
    payload: booksData
});

const requestDataError = (error: string): RequestDataFailedActionType => ({
    type: GET_DATA_FAILED,
    payload: error
});

const setSearchfield = (text: string): SetSearchfieldActionType => ({
    type: SET_SEARCHFIELD,
    payload: text
});

const setCategory = (category: string): SetCategoryActionType => ({
    type: SET_CATEGORY,
    payload: category
});

const setSorting = (sorting: string): SetSortingActionType => ({
    type: SET_SORTING,
    payload: sorting
});

const changeOffset = (offset: number): ChangeOffsetActionType => ({
    type: CHANGE_OFFSET,
    payload: offset
});

const resetBooksState = (): ResetBooksStateActionType => ({
    type: RESET_BOOKSSTATE
});


const initialBooksState: IinitialBooksStateType = {
    books: {
        totalItems: null,
        items: []
    },
    searchfield: '',
    isFetching: false,
    category: 'All',
    sorting: 'relevance',
    offset: 0,
    error: null
};

// REDUCER
const booksDataReducer = (state = initialBooksState, action: ActionsTypes): IinitialBooksStateType => {
    switch(action.type) {
        case GET_DATA_REQUESTED:
            return { 
                ...state,
                isFetching: true 
            };
        case GET_DATA_SUCCEDED: 
            return {
                ...state,
                isFetching: false,
                books: { 
                    ...state.books,
                    totalItems: action.payload.totalItems,
                    items: getUniqueBooks([
                        ...state.books.items,
                        ...action.payload.items
                    ])
                }
            };
        case GET_DATA_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case SET_SEARCHFIELD: 
            return {
                ...state,
                searchfield: action.payload
            };
        case SET_CATEGORY: 
            return {
                ...state,
                category: action.payload
            };
        case SET_SORTING: 
            return {
                ...state,
                sorting: action.payload
            };
        case CHANGE_OFFSET: 
            return {
                ...state,
                offset: state.offset + action.payload
            };
        case RESET_BOOKSSTATE: 
            return {
                ...state,
                books: {
                    totalItems: null,
                    items: []
                }
            };
        default:
            return { ...state };
    };
};

export { 
    booksDataReducer,
    GET_DATA_REQUESTED,
    GET_DATA_SUCCEDED,
    GET_DATA_FAILED,
    SET_SEARCHFIELD,
    SET_CATEGORY,
    SET_SORTING,
    CHANGE_OFFSET,
    RESET_BOOKSSTATE,
    requestData,
    requestDataSuccess,
    requestDataError,
    setSearchfield,
    setCategory,
    setSorting,
    changeOffset,
    resetBooksState
};