import React from 'react'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Tooltip
} from 'reactstrap'

function InputSearch({setFieldSearch, onSubmit, ...props}) {
    return (
        <InputGroup>
            <Input
                id="fieldSearch"
                placeholder="Type here..."
                value={props.fieldSearch}
                onChange={event => setFieldSearch(event.target.value)}
                onKeyPress={event => {
                    if (event.key === "Enter") {
                        onSubmit()
                    }
                }}
            />
            <Tooltip
                placement="top-start"
                isOpen={props.tooltipOpen}
                target="fieldSearch"
                toggle={props.toggle}
            >
                For a better experience, type in English only
            </Tooltip>
            <InputGroupAddon addonType="append">
                <Button onClick={onSubmit} style={props.button} color="primary">
                    Search
                </Button>
            </InputGroupAddon>
        </InputGroup>
    )
}

export default React.memo(InputSearch)
