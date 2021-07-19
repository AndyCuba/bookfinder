import { AppStateType } from '../../store';

const searchfieldSelector = (state: AppStateType) => state.booksData.searchfield;
const sortingSelector = (state: AppStateType) => state.booksData.sorting;
const offsetSelector = (state: AppStateType) => state.booksData.offset;
const booksSelector = (state: AppStateType) => state.booksData.books.items;
const categorySelector = (state: AppStateType) => state.booksData.category;
const totalItemsSelector = (state: AppStateType) => state.booksData.books.totalItems;
const isFetchingSelector = (state: AppStateType) => state.booksData.isFetching;



export { 
    searchfieldSelector, 
    sortingSelector,
    offsetSelector,
    booksSelector,
    categorySelector,
    totalItemsSelector,
    isFetchingSelector
};