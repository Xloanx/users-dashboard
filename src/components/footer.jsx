import React from 'react';
import Pagination from './pagination';

const Footer = (props) => {
    const {dataCount, pageSize, pageArrayState, currentPage, onPageChange} = props;
    return ( 
        <div className="d-flex bd-highlight mt-5">
            <div className="p-2 bd-highlight">< i className="fa fa-download fa-3x clickable"></i></div>
            <div className="ml-auto p-2 bd-highlight">
            <Pagination 
                dataCount= {dataCount}
                pageSize ={pageSize}
                pageArrayState= {pageArrayState}
                currentPage = {currentPage}
                onPageChange={onPageChange}/>
            </div>
        </div>
     );
}
 
export default Footer;