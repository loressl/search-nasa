import React from 'react'
import { Alert } from 'reactstrap'

export default function AlertComponent(props){
    return(
        <>
            <Alert color={props.color}>
                <h4 className="alert-heading">{props.title}</h4>
                <p>{props.message}</p>
                <hr />
                <p className="mb-0">{props.messageFooter}</p>
            </Alert>
        </>
    )
}