import React, { Component } from 'react';
import {getResult} from '../service/data';


class Dashboard extends Component {
    state = { 
        //users : 'https://randomuser.me/api/?results=5000'
        users : getResult()
     }

     genderRendering(gender){
         if (!gender === 'allGender'){
            const selectedUsers = this.state.users.filter(m => m.gender === gender);
            this.setState({users:selectedUsers});
            return this.state.users.gender;
         }
         //this.setState({users:getResult()});
         return 'All';
     }

    render() { 
        return (

            
            <React.Fragment>
                <div className=" bg-dark text-white d-flex bd-highlight p-3">
                    <div className="p-2 flex-fill bd-highlight">
                        <h2>Hello, <strong>Abiodun </strong></h2>
                        <p>Welcome to your dashboard, kindly sort through the user base</p>
                        <form>
                            <div className="col-xs-6">
                                <input type="text" className="form-control rounded" id="searchUser" placeholder="Find a User" />
                            </div>
                        </form> <br/> <br />
                        <h6>Show Users</h6>
                        <div>
                        <button onClick={() => this.genderRendering()} id='allGender' className='btn btn-danger btn-sm'><i className="fa fa-users fa-3x"></i></button>
                        <button onClick={() => this.genderRendering()} id='male' className='btn btn-danger btn-sm m-2'><i className="fa fa-male fa-3x"></i></button>
                        <button onClick={() => this.genderRendering()}  id='female' className='btn btn-danger btn-sm'><i className="fa fa-female fa-3x"></i></button>
                        </div>
                    </div>
                    <div className="bg-light text-dark p-2 flex-fill bd-highlight rounded border border-2">
                        <div>
                            <span className='p-3'>{this.genderRendering()} Users</span> <br/>
                            <form>
                            <label for="searchKey" className="form-label form-group">Filter by</label>
                            <div className=' p-5 form-group row'>
                                <div className="col-xs-4">
                                    <input type="text" className="form-control rounded-pill" id="searchKey" placeholder="Find in List" />
                                </div>
                                < div className="col-xs-2 m-2">
                                    <input className="form-control rounded-pill" list="datalistOptions" id="countryDataList" placeholder="Country"/>
                                    <datalist id="datalistOptions">
                                    <option value="Nigeria"/>
                                    <option value="San Francisco"/>
                                    <option value="New York"/>
                                    <option value="Seattle"/>
                                    <option value="Los Angeles"/>
                                    <option value="Chicago" />
                                    </datalist>
                                </div>
                                <div className="col-xs-1 form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="switchBox" checked />
                                    <label className="form-check-label" for="flexSwitchCheckChecked">Show Country</label>
                                </div>
                            </div>
                            </form>
                        </div>


                        {this.state.users.map(res =>                   
                        <div className="bg-white text-dark p-2 bd-highlight rounded border border-2 d-flex position-relative">
                            <img src={`${res.picture.thumbnail}`} className="rounded float-start flex-fill m-2 position-absolute top-0 start-0" alt="..." ></img>
                            <div className="flex-fill">
                                {`${res.name.first} ${res.name.last}`} <br />
                                {`${res.location.street.number} ${res.location.street.name} ${res.city} ${res.state} ${res.country}`}<br />
                                <i className="fa fa-envelope "></i>{`${res.email}`} &nbsp; &nbsp;
                                <i className="fa fa-phone "></i>{`${res.cell}`} &nbsp; &nbsp;
                                <div className='position-absolute bottom-0 end-0'>
                                    <button className='btn btn-teal btn-sm'><i class="fa fa-arrow-right fa-1x"></i> </button>
                                </div>
                            </div>
                        </div>
                        )}
<br /><br />

<div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
                        <button className='btn btn-primary btn-sm'><i class="fa fa-download-alt fa-2x"></i> Download Results </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;