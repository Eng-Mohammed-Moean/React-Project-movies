import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getMovespage } from "../Redux/Action/MovieAction";

const Pajination = () => {
    const [pageCount, setPageCount] = useState(0)
    const disbtch = useDispatch();
    const dataMoves = useSelector((state) => state.pageCount);
    useEffect(() => {
        setPageCount(dataMoves)
    }, []);
    const handlePageClick = (data) => {
        disbtch(getMovespage(data.selected + 1)) 
    };

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next "
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel=" previous"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    );
};

export default Pajination;
