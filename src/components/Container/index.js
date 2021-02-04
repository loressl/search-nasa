import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    //margin:1rem;
    padding-top: ${({ paddingTop }) => `${paddingTop}px`};
    flex-grow:1;
    position:sticky;
    padding-left:10px;
    padding-right:10px;
    @media screen and (max-width: 500px){
        padding-top: ${({ paddingTop }) => `${paddingTop}px`};
    }
`

export default Container