import styled from 'styled-components';
import backgroundImage from '../../images/headerBackground.jpg';

const StyledHeader = styled.header`
    padding: 2rem 0;
    background: url(${backgroundImage}) center/cover;
`;

const StyledTitle = styled.h1`
    text-align: center;
    padding: 1rem;
    color: white;
    font-size: 3.5rem;
`;

export { StyledHeader, StyledTitle };