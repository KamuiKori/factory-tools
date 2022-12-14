import React from "react";
import ReactPaginate from "react-paginate";
import style from "./style.module.scss"
const Pagination = ({currentPage,onChangePage}) => {

    return (
        <>
            <ReactPaginate
                className={style.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event) => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="<"
                forcePage={currentPage - 1}
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination