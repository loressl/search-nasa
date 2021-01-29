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

import { search } from '../../store/actions/search'

function Search(props) {
    const [fieldSearch, setFieldSearch] = useState('')

    const onSubmit =()=>{
        props.onSearch(fieldSearch)
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
                <Card
                    title="title"
                    copyright="copyright"
                    image={backHeader}
                />
            </Container>
        </>
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        onSearch: fieldSearch => dispatch(search(fieldSearch))
    }
}

export default connect(null, mapDispatchToProps)(Search)