import React from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import styled from 'styled-components'
import VideoCard from '../VideoCard'

import { connect } from 'react-redux'

const StyledModal = styled(Modal)`
    display: flex;
    align-items:center;
    justify-content:center;
    max-width:50%;
    overflow-y: auto;
    @media screen and (max-width: 500px){
        max-width:100%;
    }
`

const StyledModalBody = styled(ModalBody)`
    height: 100%;
`

const DivModalBody = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-around;
    flex-wrap:wrap;
    @media screen and (max-width: 980px){
        width:100%;
    }
`

DivModalBody.Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:end;
    margin:0.2rem;
    width:45%;
    @media screen and (max-width: 980px){
        width:100%;
    }
`

const Img = styled.img`
    width:50%;
    height:22rem;
    margin:0.2rem;
    border-radius:0.5rem;
    @media screen and (max-width: 980px){
        width:100%;
        height:20rem;
    }
`
const SmallText = styled.span`
    font-size:80%;
    display:flex;
    text-align:justify;
`

function ModalComponent(props) {
    var item = props.item || {}
    
    return (
        <>
            {item !== {} &&
                <StyledModal
                    isOpen={props.modal}
                    toggle={props.toggleModal}
                >
                    <ModalHeader toggle={props.toggleModal}>{item.title}</ModalHeader>
                    <StyledModalBody>
                        <DivModalBody>
                            {(item.media_type === 'image' || item.media_type === 'other') &&
                                <Img
                                    src={item.url}
                                    alt={item.title}
                                />
                            }
                            {item.media_type === 'video' &&
                                <VideoCard
                                    videoURL={item.url}
                                    width={50}
                                    height={20}
                                />
                            }
                            <DivModalBody.Content>
                                <p><SmallText>{item.description}</SmallText></p>
                            </DivModalBody.Content>
                        </DivModalBody>
                    </StyledModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={props.toggleModal}>Ok</Button>{' '}
                        <Button color="secondary" onClick={props.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </StyledModal>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        item: state.search.item
    }
}

export default connect(mapStateToProps, null)(ModalComponent)