import BookCard from '../../components/BookCard/BookCard';
import LoadButton from '../../components/LoadButton/LoadButton';
import Loader from '../../components/Loader/Loader';
import { useAppSelector } from '../../hooks/reduxHooks';
import { BookType } from '../../redux/reducers/booksDataReducer/booksDataTypes';
import { 
    booksSelector, 
    categorySelector, 
    isFetchingSelector, 
    totalItemsSelector 
} from '../../redux/reducers/booksDataReducer/selectors';
import { AppWrapper } from '../../style';
import {  
    StyledCardWrapper, 
    StyledHomePage, 
    StyledTotalItems 
} from './style';

const HomePage = () => {
    const books = useAppSelector(booksSelector);
    const totalItems = useAppSelector(totalItemsSelector);
    const isFetching = useAppSelector(isFetchingSelector);
    const currentCategory = useAppSelector(categorySelector);

    //Filters books according to currentCategory
    const filterByCategory = (book: BookType) => {
        if(currentCategory === 'All') {
            return book;
        } else {
            if(!book.volumeInfo.categories || (book.volumeInfo.categories[0] === currentCategory)) {
                return book;
            };
        };
    };


    if(isFetching && !books[0]) {
        return <Loader/>;
    } else {
        return(
            <StyledHomePage>
                <AppWrapper>
                    {totalItems && <StyledTotalItems>Found&nbsp;{totalItems}&nbsp;results</StyledTotalItems>}
                    <StyledCardWrapper>
                        {books[0] ? books.filter(filterByCategory).map(book => 
                            <BookCard key={book.id} book={book} />) : 
                            "Please, use search to find a book."}
                    </StyledCardWrapper>
                    {books[0] && <LoadButton />}
                </AppWrapper>
            </StyledHomePage>
        );
    }; 
};

export default HomePage;