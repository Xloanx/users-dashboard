import React from 'react';

const Pagination = (props) => {
    // const {dataIndex, dataCount, onPageDecrement, onPageIncrement} = props;
    const {dataIndex, dataCount, onPageChange} = props;
    const inActiveState = 'btn btn-light btn-sm m-1 disabled';
    const activeState = 'btn btn-light btn-sm m-1';
    return ( 
            <React.Fragment>
                <span>Page {dataIndex+1} of {dataCount}</span>
                <a className={dataIndex === 0 ? inActiveState : activeState}
                            onClick={()=>onPageChange('left')}>
                            <i className="fa fa-chevron-left"></i> </a>

                <a className={dataIndex === dataCount-1 ? inActiveState : activeState}
                onClick={()=>onPageChange('right')}>
                <i className="fa fa-chevron-right"></i> </a>
            </React.Fragment>
        
     );
}


export default Pagination;