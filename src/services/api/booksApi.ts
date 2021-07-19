import { RequestDataPayloadType, RequestDataSuccessPayloadType } from '../../redux/reducers/booksDataReducer/booksDataTypes';
import { createInstance } from '../createCustomInstance';


const API = createInstance();

export const getBooksData = (payload: RequestDataPayloadType) => {
    const { searchText, sorting, offset } = payload;
    return (
        API.get<RequestDataSuccessPayloadType>(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sorting}&startIndex=${offset}&maxResults=30&key=AIzaSyDgZldmbQ9gaBPrIH4BW2-83lnFwprfry4`)
        .then(({data}) => data)
        .catch((error: Error) => {throw error})
    ); 
};