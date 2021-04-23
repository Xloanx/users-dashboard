import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
    const {dataCount, pageSize, currentPage, pageArrayState, onPageChange} = props;
    //console.log("currentPage:", currentPage);

    const pagesCount = Math.ceil(dataCount / pageSize);
    const pageArray = _.range(1, pagesCount+1);
    //console.log(pageArray);
    const inActiveState = 'btn btn-light btn-sm m-1 disabled';
    const activeState = 'btn btn-light btn-sm m-1';
    return ( 
            <React.Fragment>
                
                <a className={currentPage === 1 ? inActiveState : activeState}
                            onClick={()=>onPageChange( currentPage, 'left' )}>
                            <i className="fa fa-chevron-left"></i> </a>

                <a className={currentPage === pageArray[pageArray.length-1] ? inActiveState : activeState}
                onClick={()=>onPageChange( currentPage, 'right' )}>
                <i className="fa fa-chevron-right"></i> </a>
            </React.Fragment>
        
     );
}
 
Pagination.propTypes = {
    dataCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
}

export default Pagination;