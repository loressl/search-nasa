import React from 'react'
import styled from 'styled-components'
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button
} from 'reactstrap'

const DivCard = styled.div`
    width:25rem;
    margin:0.5rem;
`

export default function CardComponent(props) {
    return (
        <DivCard>
            <Card>
                <img top width="100%" src={props.image} alt={props.title} />
                <CardBody>
                    <CardTitle tag="h5">{props.title}</CardTitle>
                    <CardText>{props.copyright}</CardText>
                    <CardText>
                        <small>
                            data
                        </small>
                    </CardText>
                    <Button color="info">View More</Button>
                </CardBody>
            </Card>
        </DivCard>
    )
}