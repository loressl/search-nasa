import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap'
import styled from 'styled-components'

const StyledPagination = styled(Pagination)`
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:0.5rem;
`

const StyledPaginationLink = styled(PaginationLink)`
    color:black;
    &:hover{
        color:black;
    }
`

export default function Paginationcomponent({ itensPerPage, totalItens, paginate, currentPage, setCurrentPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleCLick = (e, index) => {
        e.preventDefault()
        setCurrentPage(index)
    }

    return (
        <StyledPagination aria-label="Page navigation example">
            <PaginationItem
                disabled={currentPage <= 1}>
                <StyledPaginationLink
                    onClick={e => handleCLick(e, currentPage - 1)}
                    previous
                    href="#"
                />
            </PaginationItem>

            {pageNumbers.map((number, i) => (

                <PaginationItem key={number} active={i === (currentPage - 1)}>
                    <StyledPaginationLink onClick={e => {
                        e.preventDefault()
                        paginate(number)
                    }} href="#">{number}</StyledPaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage >= pageNumbers.length - 1}>
                <StyledPaginationLink onClick={e => handleCLick(e, currentPage + 1)}
                    next
                    href="#"
                />
            </PaginationItem>
        </StyledPagination>
    )
}