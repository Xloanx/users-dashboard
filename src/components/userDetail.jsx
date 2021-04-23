import React from 'react';
import { Link } from 'react-router-dom';

const UserDetail = (props) => {
    const { user } = props;
    const {image, title, firstName, lastName, age, addressNumber, 
            addressName, city, state, country, email, mobile, tel,
            joined} = user;
    
    return (
        <React.Fragment>
            <Link to='/dashboard'>
            <i className="fa fa-arrow-left fa-1x my-3"></i> Result
        </Link>
        <div className="container my-3">
            <div className="row">
                <div className="col-4">
                    <img src= {image}
                        alt="..." />
                </div>
                <div className="col-8">
                    <div className="">
                        <strong>
                            {title +"."+" " + firstName + " "+lastName } 
                        </strong> {age} </div>
                    <div className="">
                        {addressNumber +" "+addressName +", "+city+", "+state}
                        {", "+country}
                    </div>
                    <div className="badge rounded-pill bg-secondary"> 
                        <i className="fa fa-envelope "></i> {email} 
                    </div> <br />
                    <div className="badge rounded-pill bg-danger"> 
                       { joined } 
                    </div>
                    <div className="sm">  
                        <i className="fa fa-phone "></i> { tel }</div>
                    <div className="sm">  
                        <i className="fa fa-mobile "></i> { mobile }</div>
                   
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default UserDetail;