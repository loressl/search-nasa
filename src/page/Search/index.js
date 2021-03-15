import React, { useState, useEffect, useCallback } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import style from '../../config/styles'
import backHeader from '../../assets/img/header2.jpg'
import Container from '../../components/Container'
import Card from '../../components/Card'
import Alert from '../../components/Alert'
import Footer from '../../components/Footer'
import Modal from '../../components/Modal'
import Pagination from '../../components/Pagination'

import { connect } from 'react-redux'

import { searchAction, clearList } from '../../store/actions/search'
import { AtomSpinner } from 'react-epic-spinners'

import { useResizeDetector } from 'react-resize-detector'

import InputSearch from '../../components/InputSearch'

function Search(props) {
    const [fieldSearch, setFieldSearch] = useState('')
    const [onSubmitFlag, setOnSubmit] = useState(false)
    const [tooltipOpen, setTooltipOpen] = useState(false)
    const [heightFooter, setHeightFooter] = useState(0)
    const [heightHeader, setHeightHeader] = useState(0)
    const [modal, setModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    var itensPerPage = 10
    var { height, ref } = useResizeDetector()

    var list = props.list

    const indexOfLastItem = currentPage * itensPerPage
    const indexOfFirstItem = indexOfLastItem - itensPerPage
    const currentItens = list.slice(indexOfFirstItem, indexOfLastItem)

    useEffect(() => {
        if (list.length > 0) {
            setOnSubmit(false)
        }
        setHeightFooter(document.getElementById('footer').clientHeight)
    }, [list.length])

    useEffect(() => {
        setHeightHeader(height)

    }, [height])

    const onSubmit = async () => {
        props.onClearList()
        setOnSubmit(true)
        await props.onSearch(fieldSearch)
    }

    const toggle = useCallback(() => {
        setTooltipOpen(!tooltipOpen)
    }, [setTooltipOpen, tooltipOpen]);

    const toggleModal = useCallback(() => {
        setModal(!modal)
    }, [setModal, modal])

    const paginate = useCallback((pageNumber) => {
        setCurrentPage(pageNumber)
    }, [setCurrentPage])

    const handleCLickPage = useCallback((e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }, [setCurrentPage])

    return (
        <>
            <div style={{ minHeight: `calc(100vh - ${heightFooter}px)` }}>
                <Header ref={ref} id="header" backgroundImage={backHeader}>
                    <Title>
                        The most beautiful astronomical photographs in the world
                    </Title>
                    <Header.Content>
                        <InputSearch
                            setFieldSearch={setFieldSearch}
                            fieldSearch={fieldSearch}
                            onSubmit={onSubmit}
                            tooltipOpen={tooltipOpen}
                            toggle={toggle}
                            button={style.button}
                        />
                    </Header.Content>
                </Header>
                {(list.length !== 0 && list !== "error") &&
                    <Pagination
                        marginTop={heightHeader}
                        itensPerPage={itensPerPage}
                        totalItens={list.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        handleCLick={handleCLickPage}
                    />
                }
                <Container id="container" paddingTop={(list.length === 0 && !onSubmitFlag) || list === "error" ? (heightHeader + 15) : (heightHeader + 70)}>
                    {list === "error" ?
                        <Alert
                            color="info"
                            title="Info!!"
                            message="There is no data for this search or an error occurred during the request."
                            messageFooter="Try again!!"
                        />
                        : (!onSubmitFlag && list.length === 0) ?
                            <Alert
                                color="success"
                                title="Welcome!!"
                                message="Here is a small project with React + Redux that uses the API that fetches data from NASA's APOD, a popular service that shows the most beautiful astronomical photographs in the world."
                                messageFooter="Do your research!!"
                            />
                            : onSubmitFlag && list.length === 0 ?
                                <AtomSpinner size={100} color="black" />
                                : currentItens.map((item, index) => {
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
                                        currentPage={currentPage}
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