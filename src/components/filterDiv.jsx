import React from 'react';
import SearchBox from './searchBox';


const FilterDiv = (props) => {
    const {header, value, onChange} = props;
    //console.log(onGenderSelect);
    return (
        <React.Fragment>
            <div className="container-fluid">
              <h3> <b>{header}</b></h3>
              <p>Filter by</p>
            </div>

        <div className="container-fluid">
        <div className="row">
            <div className="col-6">
              <SearchBox value={value} onChange={onChange} placeholder = 'Find in List...' />
            </div>
            <div className="col-3">
              <input className="form-control rounded-pill" 
                    list="datalistOptions" 
                    id="countryDataList" 
                    placeholder="Country"/>
                        <datalist id="datalistOptions">
                        <option value="Nigeria"/>
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago" />
                        </datalist>
            </div>
            <div className="col-3">
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                <label className="custom-control-label" htmlFor="customSwitch1">Show Country</label>
              </div>
            </div>
        </div>
      </div>

        </React.Fragment>
        
     );
}
 
export default FilterDiv;