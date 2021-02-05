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
    position:fixed;
    z-index:1;
    background-color:white;
    margin-top: ${({ marginTop }) => `${marginTop}px`};
    @media screen and (max-width: 500px){
        justify-content:flex-start;
        margin-top: ${({ marginTop }) => `${marginTop}px`};
    }
    .pagination{
        overflow-x:auto;
        padding-top:0.5rem;
    }
`

const StyledPaginationLink = styled(PaginationLink)`
    color:black;
    &:hover{
        color:black;
    }
`

function Paginationcomponent({ itensPerPage, totalItens, paginate, currentPage, handleCLick, ...props }) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItens / itensPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <StyledPagination marginTop={props.marginTop} aria-label="Page navigation example">
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

export default React.memo(Paginationcomponent)