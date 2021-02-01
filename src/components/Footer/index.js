import React from 'react'
import styled from 'styled-components'

const FooterBase = styled.footer`
    background-color: ${({ color }) => color};
    color:${({ textColor }) => textColor};
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    height: 3rem;
`
function Footer(props) {
    return (
        <FooterBase
            id={props.id}
            color={props.color}
            textColor={props.textColor}
        >
            &copy; Lorena Lima
        </FooterBase>
    )
}


export default Footer