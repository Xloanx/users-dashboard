import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
    const {filteredUsers} = props;
    return (
        
        <React.Fragment>
            
            {filteredUsers.map(user =>                   
            <div key= {user.email}
                className="bg-white text-dark p-2 bd-highlight rounded border border-2 d-flex my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src={user.picture.thumbnail} 
                                className="rounded float-start flex-fill m-2 position-absolute top-0 start-0" 
                                alt="..." />
                        </div>
                        <div className="col-9">
                            {user.name.first} {user.name.last} <br />
                            {user.location.street.number}
                            {user.location.street.name}
                            {user.city} 
                            {user.state} 
                            {user.country}<br />
                            <i className="fa fa-envelope "></i>{user.email} &nbsp; &nbsp;
                            <i className="fa fa-phone "></i>{user.cell} &nbsp; &nbsp;
                        </div>
                        <div className="col-1">
                            <Link to={`/dashboard/${user.login.uuid}`} 
                                className='btn btn-success btn-sm'>
                                <i className="fa fa-arrow-right fa-1x"></i> 
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            )} 
        </React.Fragment>
);}
 
export default UserCard;