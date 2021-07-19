
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setCategory, setSorting } from '../../redux/reducers/booksDataReducer/booksDataReducer';
import { booksSelector, categorySelector } from '../../redux/reducers/booksDataReducer/selectors';
import { SortingsWrapper } from './style';

const Sortings = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector(booksSelector);
    const currentCategory = useAppSelector(categorySelector);
    
    //Create unique categories from books
    const categories = new Set(books?.filter(book => book.volumeInfo.categories)
        .map(book => book.volumeInfo?.categories[0]));

    //Depending on the select tag Id sets Category or Sorting
    const handleChange = (e: React.FormEvent<EventTarget>) => {
        const { value, id } = e.target as HTMLSelectElement;
        if(id === 'category') {
            dispatch(setCategory(value));
        } else if(id === 'sorting'){
            dispatch(setSorting(value));
        };    
    };

    //Shows categories and sorting selectors if state contains books
    return(
        <>
            {
                books[0] && 
                <SortingsWrapper>
                    <div>
                        <label htmlFor="category">Categories</label>
                        <select id="category" onChange={handleChange} value={currentCategory}>
                            <option value="All">All</option>
                        {Array.from(categories).map((category, index) => 
                            <option key={index} value={category}>{category}</option>)}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="sorting">Sorting by</label>
                        <select id="sorting" onChange={handleChange} defaultValue={currentCategory}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </SortingsWrapper>               
            }            
        </>
    );
};


export default Sortings;