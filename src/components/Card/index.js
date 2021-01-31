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

export default function CardComponent(props) {
    var url = props.url !== undefined ? props.url : noImage

    return (
        <DivCard>
            <Card style={{ height: '30rem' }}>
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
            </Card>
        </DivCard>
    )
}