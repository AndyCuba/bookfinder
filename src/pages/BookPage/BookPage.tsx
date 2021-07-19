import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import { AppStateType } from '../../redux/store';
import { AppWrapper } from '../../style';
import { StyledImage, ImageWrapper, BookPageWrapper, DescriptionWrapper } from './style';

type ParamType = {
    id: string
}

const BookPage = () => {
    const { id } = useParams<ParamType>();
    const bookSelector = (state: AppStateType) => 
        state.booksData.books.items?.filter(book => 
        book.id === id);
    
    
    const [book] = useAppSelector(bookSelector);
    
    const { authors, description, imageLinks, categories, title } = book?.volumeInfo;
    
    return(
        <div>
            <AppWrapper>
                <BookPageWrapper>
                   <ImageWrapper>
                        <StyledImage imageUrl={imageLinks?.thumbnail && imageLinks.thumbnail}/>
                    </ImageWrapper> 
                    <DescriptionWrapper>
                        <p>
                            {categories && categories.map((category, index) => 
                            <span key={index}>{(index ? '/ ' : '') + category}</span>)}
                        </p>
                        <h3>{title}</h3>
                        <p>
                            {authors?.map((author, index) => 
                            <span key={index}>{(index ? ', ' : '') + author}</span>)}
                        </p>
                        <p>{description}</p>
                    </DescriptionWrapper>
                </BookPageWrapper>
                
            </AppWrapper>
        </div>
    );
};

export default BookPage;