import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { 
    changeOffset,
    requestData, 
    resetBooksState, 
    setCategory, 
    setSearchfield 
} from '../../redux/reducers/booksDataReducer/booksDataReducer';
import { 
    offsetSelector, 
    searchfieldSelector, 
    sortingSelector 
} from '../../redux/reducers/booksDataReducer/selectors';


const SearchForm = () => {
    const dispatch = useAppDispatch();
    const history = useHistory();
    const searchfield = useAppSelector(searchfieldSelector);
    const sorting = useAppSelector(sortingSelector);
    const offset = useAppSelector(offsetSelector);

    //Sets initial category, set offset to 0, resets Books State, dispatches request
    const searchForBooks = () => {
        if(searchfield) {
            history.push('/');
            dispatch(setCategory('All'));
            dispatch(changeOffset(-offset));
            dispatch(resetBooksState());
            dispatch(requestData(searchfield, sorting, offset));
        };
    };

    //Send request if sorting will be changed
    useEffect(() => {
        searchForBooks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sorting]);

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        searchForBooks();
    };

    // Set searchfield in state
    const handleChange = (e: React.FormEvent<EventTarget>) => {
        const { value } = e.target as HTMLInputElement;
        dispatch(setSearchfield(value));
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={searchfield}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchForm;