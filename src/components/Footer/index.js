import React from 'react'
import styled from 'styled-components'
import iconGitHub from '../../assets/img/github.png'
import iconLinkedin from '../../assets/img/linkedin.png'

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

const ImgIcon = styled.img`
    width:30px;
    height:30px;
    margin-left:0.5rem;
`

function Footer(props) {
    return (
        <FooterBase
            id={props.id}
            color={props.color}
            textColor={props.textColor}
        >
            <a href="https://github.com/loressl">
                <ImgIcon src={iconGitHub} alt="https://github.com/loressl" />
            </a>
            <a href="https://www.linkedin.com/in/lorena-lima-78a9b752/">
                <ImgIcon src={iconLinkedin} alt="https://www.linkedin.com/in/lorena-lima-78a9b752/" />
            </a>
        </FooterBase>
    )
}


export default Footer