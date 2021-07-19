import styled from 'styled-components';

const StyledImage = styled.div`
    width: 10rem;
    height: 15rem;
    background: url(${(props: { imageUrl: string}) => props.imageUrl ? props.imageUrl : 'none'}) center/cover;
    box-shadow: 0px 3px 8px 3px rgba(34, 60, 80, 0.2);
    align-self: center;
`;

const ImageWrapper = styled.div`
    width: 20rem;
    height: 24rem;
    background-color: rgb(242, 241, 237);
    display: flex;
    justify-content: center;
`;

const BookPageWrapper = styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 24rem));
    justify-items: center;
    grid-row-gap: 2rem;
`;

const DescriptionWrapper = styled.div`
    p {
        padding: 1rem 0;
    }
`;

export { 
    StyledImage, 
    ImageWrapper, 
    BookPageWrapper, 
    DescriptionWrapper
};