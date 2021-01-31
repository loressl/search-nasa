import React, { useState } from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap'
import style from '../../config/styles';
import backHeader from '../../assets/img/header2.jpg'
import Container from '../../components/Container'
import Card from '../../components/Card'

import { connect } from 'react-redux'

import { searchAction } from '../../store/actions/search'

function Search(props) {
    const [fieldSearch, setFieldSearch] = useState('')
    const list = props.list || []

    const onSubmit = async()=>{
        await props.onSearch(fieldSearch)
    }
    
    return (
        <>
            <Header backgroundImage={backHeader}>
                <Title>
                    The most beautiful astronomical photographs in the world
                </Title>
                <Header.Content>
                    <InputGroup>
                        <Input
                            placeholder="Do your research here..."
                            value={fieldSearch}
                            onChange={event => setFieldSearch(event.target.value)}
                        />
                        <InputGroupAddon addonType="append">
                            <Button onClick={onSubmit} style={style.button} color="info">
                                Search
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Header.Content>
            </Header>
            <Container>
                {list.map((item, index)=>{
                    return <Card
                        key={index}
                        title={item.title}
                        copyright={item.copyright}
                        mediaType={item.media_type}
                        url={item.url}
                        date={item.date}
                        thumbnail_url={item.thumbnail_url}
                    />
                })}
            </Container>
        </>
    )
}

const mapStateToProps = state =>{
    return {
        list : state.search.list
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onSearch: fieldSearch => dispatch(searchAction(fieldSearch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)