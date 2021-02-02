import React from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink
} from 'reactstrap'
import styled from 'styled-components'
import './styles.css';

const StyledPagination = styled(Pagination)`
    width:100%;
    display:flex;
    justify-content:end;
`

const StyledPaginationLink = styled(PaginationLink)`
    color:black;
    &:active{
        background-color: #000;
        color:white;
    }
    ::marker{
        background-color: #000;
    }
    &:hover{
        background-color: #000;
        color:white;
    }
    &:link{
        background-color: #000;
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
                className="paginationItemStyle"
                disabled={currentPage <= 1}>
                <PaginationLink
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