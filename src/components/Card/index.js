import React from 'react'
import styled from 'styled-components'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardFooter,
    Button
} from 'reactstrap'
import VideoCard from '../VideoCard'
import noImage from '../../assets/img/no-image-icon-0.jpg'

const DivCard = styled.div`
    width:30rem;
    margin:0.5rem;
`

const StyledCard = styled(Card)`
    height: 35rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    @media screen and (max-width: 500px){
        height:40rem
    }
`

export default function CardComponent(props) {
    var url = props.url !== undefined ? props.url : noImage

    return (
        <DivCard>
            <StyledCard> 
                {(props.mediaType === 'image' || props.mediaType === 'other') &&
                    <img
                        top
                        width="100%"
                        height="45%"
                        src={url}
                        alt={props.title}
                    />}
                {props.mediaType === 'video' &&
                    <VideoCard
                        videoURL={url}
                    />
                }
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardText>{props.copyright}</CardText>
                    <CardText>
                        <small>
                            {props.date}
                        </small>
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Button color="info">View More</Button>
                </CardFooter>
            </StyledCard>
        </DivCard>
    )
}