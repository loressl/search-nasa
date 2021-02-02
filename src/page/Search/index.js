import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Tooltip
} from 'reactstrap'
import style from '../../config/styles'
import backHeader from '../../assets/img/header2.jpg'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Alert from '../../components/Alert'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'

import { connect } from 'react-redux'

import { searchAction, clearList } from '../../store/actions/search'
import { AtomSpinner } from 'react-epic-spinners'

function Search(props) {
    const [fieldSearch, setFieldSearch] = useState('')
    const [onSubmitFlag, setOnSubmit] = useState(false)
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [heightFooter, setHeightFooter] = useState(0)
    const [heightHeader, setHeightHeader] = useState(0)
    const [modal, setModal] = useState(false)

    var list = props.list || []

    useEffect(() => {
        if (list.length > 0) {
            setOnSubmit(false)
        }
        setHeightFooter(document.getElementById('footer').clientHeight)
        setHeightHeader(document.getElementById('header').clientHeight)
    }, [list.length])

    const onSubmit = async () => {
        props.onClearList()
        setOnSubmit(true)
        await props.onSearch(fieldSearch)
    }

    const toggle = () => setTooltipOpen(!tooltipOpen);

    const toggleModal = () =>{
        setModal(!modal)
    }

    return (
        <>
            <div style={{ minHeight: `calc(100vh - ${heightFooter}px)` }}>
                <Header id="header" backgroundImage={backHeader}>
                    <Title>
                        The most beautiful astronomical photographs in the world
                    </Title>
                    <Header.Content>
                        <InputGroup>
                            <Input
                                id="fieldSearch"
                                placeholder="Type here..."
                                value={fieldSearch}
                                onChange={event => setFieldSearch(event.target.value)}
                            />
                            <Tooltip
                                placement="top-start"
                                isOpen={tooltipOpen}
                                target="fieldSearch"
                                toggle={toggle}
                            >
                                For a better experience, type in English only
                            </Tooltip>
                            <InputGroupAddon addonType="append">
                                <Button onClick={onSubmit} style={style.button} color="info">
                                    Search
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Header.Content>
                </Header>
                <Container id="container">
                    {(!onSubmitFlag && list.length === 0) &&
                        <Alert
                            color="success"
                            title="Welcome!!"
                            message="Here is a small project with React + Redux that uses an API that fetches data from NASA's APOD, which is a popular service that shows the most beautiful astronomical photographs in the world."
                            messageFooter="Do your research!!"
                        />
                    }
                    {list.length === 0 && onSubmitFlag ?
                        <AtomSpinner style={{ marginTop: '10rem' }} size={100} color="black" /> :
                        list.map((item, index) => {
                            return <Card
                                key={index}
                                index={index}
                                title={item.title}
                                copyright={item.copyright}
                                mediaType={item.media_type}
                                url={item.url}
                                date={item.date}
                                thumbnail_url={item.thumbnail_url}
                                openModal={toggleModal}
                            />
                        })
                    }
                    <Modal
                        modal={modal}
                        toggleModal={toggleModal}
                        heightHeader={heightHeader}
                    />
                </Container>
            </div>
            <Footer
                id="footer"
                color={style.colors.primary}
                textColor={style.colors.textButton}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        list: state.search.list,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: fieldSearch => dispatch(searchAction(fieldSearch)),
        onClearList: () => dispatch(clearList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)