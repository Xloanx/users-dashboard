import React from 'react';
import Pagination from './pagination1';

const Footer = (props) => {
    //const {dataIndex, dataCount, onPageDecrement, onPageIncrement} = props;
    const {dataIndex, dataCount, onPageChange} = props;
    return ( 
        <div className="d-flex bd-highlight mt-5">
            <div className="p-2 bd-highlight">< i className="fa fa-download fa-3x clickable"></i></div>
            <div className="ml-auto p-2 bd-highlight">
            <Pagination
                dataIndex = {dataIndex}
                dataCount= {dataCount}
                onPageChange = {onPageChange}
                // onPageDecrement = {onPageDecrement}
                // onPageIncrement={onPageIncrement}
                />
            </div>
        </div>
     );
}
 
export default Footer;