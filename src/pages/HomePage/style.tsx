import styled from 'styled-components';


const StyledCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 18rem));
    justify-items: center;
    grid-row-gap: 2rem;
`;

const StyledTotalItems = styled.p`
    text-align: center;
    margin-bottom: 1rem;
`;

const StyledHomePage = styled.div`
    padding: 1rem 0;
`;



export { StyledCardWrapper, StyledTotalItems, StyledHomePage };