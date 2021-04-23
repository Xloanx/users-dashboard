import React from 'react';
import SearchBox from './searchBox';

const GenderSelectionDiv = (props) => {
    const {onGenderSelect, value, selectedGender, onChange} = props;
    return ( 
        <div className="p-2 flex-fill bd-highlight">
        <h2>Hello, <strong>Abiodun </strong></h2>
        <p>Welcome to your dashboard, kindly sort through the user base</p>

        <SearchBox value={value} onChange={onChange} placeholder = 'Find a User...' />
        <br/> <br />
        <h6>Show Users</h6>
        <div>
            <button onClick={()=>onGenderSelect('all')} 
             id='all'
             className='btn btn-danger btn-sm mx-2'>
            <i className= {selectedGender === 'all' ?"fa fa-users fa-3x" :"fa fa-users fa-2x"}></i></button>   

            <button onClick={()=>onGenderSelect('male')} 
             id='male'
             className='btn btn-success btn-sm mx-2'>
            <i className={selectedGender === 'male' ?"fa fa-male fa-3x" :"fa fa-male fa-2x"}></i></button>

            <button onClick={()=>onGenderSelect('female')} 
             id='female'
             className='btn btn-primary btn-sm mx-2'>
            <i className={selectedGender === 'female' ?"fa fa-female fa-3x" :"fa fa-female fa-2x"}></i></button>
       </div>
    </div>
     );
}
 
export default GenderSelectionDiv;