import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = styled.p`
    font-weight: 800;
`;

const StyledCard = styled(Link)`
    background-color: rgb(242, 241, 237);
    padding: 1.5rem 1rem;
    width: 15rem;
    height: 21rem;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    p {
        margin-top: 0.4rem;
        color: black;
    }
`;

const StyledAuthors = styled.p`
    
`;

const StyledCategory = styled.p`
    
`;

const StyledImage = styled.div`
    height: 10rem;
    width: 7rem;
    background: url(${(props: { imageUrl: string}) => props.imageUrl ? props.imageUrl : 'none'}) center/cover;
    box-shadow: 0px 3px 8px 3px rgba(34, 60, 80, 0.2);
    align-self: center;
`;

export { 
    StyledTitle, 
    StyledCard, 
    StyledAuthors, 
    StyledImage,
    StyledCategory
};