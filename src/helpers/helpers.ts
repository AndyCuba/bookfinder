import { BookType } from '../redux/reducers/booksDataReducer/booksDataTypes';


//Retruns array with unique books
function getUniqueBooks(arr: BookType[])  {
    
    let tmpArray: Array<string> = [];
     function bookCheck(book: BookType) {
         if (tmpArray.indexOf(book.id) === -1) {
            tmpArray.push(book.id);
            return true
         }
         return false;
    };

    if(arr !== null) {
       return arr.filter((book: BookType): book is BookType => bookCheck(book)); 
    } else { return arr }
    
};

export { getUniqueBooks };