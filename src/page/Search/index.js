import React from 'react'
import Header from '../../components/Header'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap'
import style from '../../config/styles';
import backHeader from '../../assets/img/13184737684400.jpg'

export default function Search() {
    return (
        <>
            <Header backgroundImage={backHeader}>
                <h2 style={style.title}>
                    The most beautiful astronomical photographs in the world
                </h2>
                <Header.Content>
                    <InputGroup>
                        <Input
                            placeholder="Do your research here..."
                        />
                        <InputGroupAddon addonType="append">
                            <Button style={style.button} color="info">
                                Search
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Header.Content>
            </Header>
        </>
    )
}