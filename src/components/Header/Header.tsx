import { AppWrapper } from '../../style';
import SearchForm from '../SearchForm/SearchForm';
import Sortings from '../Sortings/Sortings';
import { StyledHeader, StyledTitle } from './style';

const Header = () => {
    return(
        <StyledHeader>
            <AppWrapper>
                <StyledTitle>Search for books</StyledTitle>
                <SearchForm />
                <Sortings />
            </AppWrapper>
        </StyledHeader>
    );
};

export default Header;