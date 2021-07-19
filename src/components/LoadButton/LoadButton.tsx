import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { changeOffset, requestData } from '../../redux/reducers/booksDataReducer/booksDataReducer';
import { 
    offsetSelector,
    searchfieldSelector, 
    sortingSelector 
} from '../../redux/reducers/booksDataReducer/selectors';
import { StyledButton } from './style';

const LoadButton = () => {
    const dispatch = useAppDispatch();
    const searchfield = useAppSelector(searchfieldSelector);
    const sorting = useAppSelector(sortingSelector);
    const offset = useAppSelector(offsetSelector);

    const handleClick = () => {
        dispatch(changeOffset(30));
        dispatch(requestData(searchfield, sorting, offset + 30));
    };

    return(
        <StyledButton>
            <button onClick={handleClick}>Load more</button>
        </StyledButton>
    );
};

export default LoadButton;