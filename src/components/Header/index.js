import styled from 'styled-components'

const Header = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:100%;
    min-height: 18rem;
    flex:1;
    background-size:cover;
    background-position:center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    z-index:1;
    position:fixed;
    top:0;
    @media screen and (max-width: 500px){
        min-height:10rem;
        /* *{
            margin:0;
        } */
    }
`

Header.Content = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
    width:60%;
    margin:2rem;
    @media screen and (max-width: 500px){
        width:70%;
        margin:0.5rem;
    }
`

export default Header