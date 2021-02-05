import React from 'react'
import { Alert } from 'reactstrap'

function AlertComponent(props){
    console.log("render alert...")
    return(
        <>
            <Alert color={props.color} style={{width: '100%'}}>
                <h4 className="alert-heading">{props.title}</h4>
                <p>{props.message}</p>
                <hr />
                <p className="mb-0">{props.messageFooter}</p>
            </Alert>
        </>
    )
}

export default React.memo(AlertComponent)