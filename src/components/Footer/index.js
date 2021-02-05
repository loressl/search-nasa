import React,{memo} from 'react'
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
const addressGitHub= "https://github.com/loressl"
const addressLinkedin= "https://www.linkedin.com/in/lorena-lima-78a9b752/"

function Footer(props) { 
    return (
        <FooterBase
            id={props.id}
            color={props.color}
            textColor={props.textColor}
        >
            <a href={addressGitHub}>
                <ImgIcon src={iconGitHub} alt={addressGitHub} />
            </a>
            <a href={addressLinkedin}>
                <ImgIcon src={iconLinkedin} alt={addressLinkedin} />
            </a>
        </FooterBase>
    )
}

export default memo(Footer)