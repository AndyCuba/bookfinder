import {   
    GET_DATA_REQUESTED,
    GET_DATA_SUCCEDED,
    GET_DATA_FAILED,
    SET_SEARCHFIELD,
    SET_CATEGORY,
    SET_SORTING,
    CHANGE_OFFSET,
    RESET_BOOKSSTATE
} from './booksDataReducer';



// ACTION TYPES
type RequestDataPayloadType = {
    searchText: string,
    sorting: string
    offset: number
};

type RequestDataActionType = {
    type: typeof GET_DATA_REQUESTED,
    payload: RequestDataPayloadType
};

type RequestDataSuccessPayloadType = {
    items: BookType[] | [],
    totalItems: number | null
};

type RequestDataSuccessActionType = {
    type: typeof GET_DATA_SUCCEDED,
    payload: RequestDataSuccessPayloadType
};

type RequestDataFailedActionType = {
    type: typeof GET_DATA_FAILED,
    payload: string | null
};

type SetSearchfieldActionType = {
    type: typeof SET_SEARCHFIELD,
    payload: string
};

type SetCategoryActionType = {
    type: typeof SET_CATEGORY,
    payload: string
};

type SetSortingActionType = {
    type: typeof SET_SORTING,
    payload: string
};

type ChangeOffsetActionType = {
    type: typeof CHANGE_OFFSET,
    payload: number
};

type ResetBooksStateActionType = {
    type: typeof RESET_BOOKSSTATE
};

type ActionsTypes = RequestDataActionType | RequestDataSuccessActionType |
    RequestDataFailedActionType | SetSearchfieldActionType | SetCategoryActionType | 
    SetSortingActionType | ChangeOffsetActionType | ResetBooksStateActionType;

type BookType = {
    id: string,
    volumeInfo: {
        title: string,
        authors: string[],
        description: string,
        imageLinks: {
            thumbnail: string
        },
        categories: string[],
        publishedDate: string
    } 
};

// INITIAL STATE TYPE
type IinitialBooksStateType = {
    books: {
        totalItems: number | null,
        items: BookType[] | []
    },
    searchfield: string, //string for search
    isFetching: boolean, //displays loader
    category: string, //current category select
    sorting: string, //current sorting word
    offset: number, //offset for "Load more" button
    error: string | null
};

export type { 
    IinitialBooksStateType,
    RequestDataPayloadType,
    RequestDataActionType,
    RequestDataSuccessPayloadType,
    RequestDataSuccessActionType,
    RequestDataFailedActionType,
    SetSearchfieldActionType,
    SetCategoryActionType,
    SetSortingActionType,
    ChangeOffsetActionType,
    ResetBooksStateActionType,
    BookType,
    ActionsTypes
};