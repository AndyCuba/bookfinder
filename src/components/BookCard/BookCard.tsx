import { 
    StyledCard, 
    StyledTitle, 
    StyledAuthors,
    StyledImage,
    StyledCategory
} from './style';

import { BookType } from '../../redux/reducers/booksDataReducer/booksDataTypes';

type BookCardPorpsType = {
    book: BookType
};

const BookCard = (props: BookCardPorpsType) => {
    const { title, authors, imageLinks, categories } = props.book.volumeInfo;
    const { id } = props.book;

    return(
        <StyledCard to={`book/${id}`}>
            <StyledImage imageUrl={imageLinks?.thumbnail && imageLinks.thumbnail}/>

            <StyledCategory>{categories && categories[0]}</StyledCategory>
            
            <StyledTitle>{title[65] ? title.slice(0, 65) + '...' : title}</StyledTitle>

            <StyledAuthors>{authors?.map((author, index) => 
                <span key={index}>{(index ? ', ' : '') + author}</span>)}
            </StyledAuthors>

        </StyledCard>
    );
};

export default BookCard;