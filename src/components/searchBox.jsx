import React from 'react';

const SearchBox = (props) => {
    const {value, placeholder, onChange} = props;
    return ( 
        <input 
                type='text'
                name = 'query'
                className="form-control rounded-pill" 
                placeholder={placeholder} 
                value = {value}
                onChange={e=>onChange(e.currentTarget.value)}/>
     );
}
 
export default SearchBox;