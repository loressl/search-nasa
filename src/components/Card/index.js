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

import { connect } from 'react-redux'
import { chooseItem } from '../../store/actions/search'

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

function CardComponent({ setIndexItem, ...props }) {
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
                        width={100}
                        height={15}
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
                    <Button color="info" onClick={_ => {
                        var page = props.currentPage - 1
                        var index = props.index
                        props.openModal()
                        props.onChoose(page * 10 + index)
                    }}>
                        View More
                    </Button>
                </CardFooter>
            </StyledCard>
        </DivCard>
    )
}

const mapDispatchToProps = dispatch =>{
    return{
        onChoose: index => dispatch(chooseItem(index))
    }
}

export default connect(null, mapDispatchToProps)(CardComponent)