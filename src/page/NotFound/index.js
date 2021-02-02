import React from 'react'
import styled from 'styled-components'
import space from '../../assets/img/Space.jpg'
import spaceman from '../../assets/img/spaceman.gif'
import { Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const StyledNotFound = styled.div`
    background-size:cover;
    background-position:center;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    flex:1;
    color:#fff;
    min-height:100vh;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const StyledButton = styled(Button)`
    color:#fff;
`

export default function NotFound() {
    const history = useHistory()

    return (
        <StyledNotFound backgroundImage={space}>
            <img width={350} height={350} src={spaceman} alt="not found" />
            <p style={{ fontSize: "100px" }}>404</p>
            <p style={{ fontSize: "20px" }}>Looks like you are</p>
            <p style={{ fontSize: "30px" }}>LOST IN SPACE</p>
            <StyledButton
                outline
                onClick={() => history.goBack()}
            >
                Go Back Search
            </StyledButton>
        </StyledNotFound>
    )
}