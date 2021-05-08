import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';
import GenderSelectionDiv from './genderSelectionDiv';
import UserDetail from './userDetail';
import FilterDiv from './filterDiv';
import Footer from './footer1';
import { getResult } from '../service/data';



class UserDetails extends Component {
    state = { 
        user :{},
        selectedGender: null,
        searchQuery:"",
        totalUsersCount:"",
        userIndexInDb:""
     }

    
     async componentDidMount() {
        const {match, history} = this.props ;
        const uuid = match.params.uuid;
        var userArray = [];
        var indexOfUserArray = '';
        // const response = getResult();
        // const usersArrays = response.results;
        const response = await axios.get(config.apiEndPoint);
        const usersArrays = response.data.results;
        for (var i=0; i < usersArrays.length; i++ ){
            if(usersArrays[i].login.uuid === usersArrays.filter(m => m.login.uuid === uuid)[0].login.uuid ){
                userArray = usersArrays.filter(m => m.login.uuid === uuid);
                indexOfUserArray = i;
            }
        }

        if(userArray.length > 1) return;    //return nothing if multiple users share same uuid
        const [user] = userArray;            //get the user object from the array 
        if (!user) return history.replace('/notFound');
        this.setState({ user :              this.mapToViewModel(user), 
                        totalUsersCount:    usersArrays.length,
                        userIndexInDb:      indexOfUserArray
                    });
     }

     mapToViewModel(user){
        return{
          uuid: user.login.uuid,
          title:user.name.title,
          firstName:user.name.first,
          lastName:user.name.last,
          email:user.email,
          age:user.dob.age,
          image:user.picture.large,
          joined:user.registered.date,
          mobile:user.cell,
          tel:user.phone,
          addressNumber: user.location.street.number,
          addressName: user.location.street.name,
          city: user.location.city,
          state:user.location.state,
          country:user.location.country,
        }
      }

    handleGenderSelect = gender =>{
        this.setState({selectedGender:gender, searchQuery:"", currentPage:1});  
     }

     handleSearch = query =>{
        this.setState({searchQuery:query, selectedGender: null, currentPage:1});
    }

    handlePageChange= async (direction) =>{
        let {userIndexInDb} = this.state;
        if(direction === 'left')--userIndexInDb;
        else if (direction === 'right')++userIndexInDb;
        //const response = getResult();
        //const usersArrays = response.results;
        const response = await axios.get(config.apiEndPoint);
        const usersArrays = response.data.results;
        console.log(usersArrays);
        const user = usersArrays[userIndexInDb]; //get the next user of the specified index
        console.log(user);
        this.setState({user : this.mapToViewModel(user), userIndexInDb });
    }


     getData = () =>{

        const { user, totalUsersCount, userIndexInDb} = this.state;
       
        let filteredUser = user;
        let header = 'User Details';

    //     if (searchQuery){
    //         filteredUsers = users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().includes(searchQuery.toLowerCase()))
    //         ?users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().includes(searchQuery.toLowerCase()))
    //         :users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().startsWith(searchQuery.toLowerCase()));
    //     }
    //     else if ( selectedGender !=='all' && selectedGender !== null) {
    //        filteredUsers = users.filter(m => m.gender === selectedGender )
    //        header = selectedGender.charAt(0).toUpperCase()+ selectedGender.slice(1)
    //     }
        

        return {totalUsersCount:totalUsersCount, user:filteredUser, header, userIndexInDb};
    }

    render() {
        const {searchQuery, selectedGender} = this.state;
        const { totalUsersCount, user, header, userIndexInDb } = this.getData();
        return (
            <React.Fragment>
                <div className=" bg-dark text-white d-flex bd-highlight p-3">
                    <GenderSelectionDiv 
                    onGenderSelect = {this.handleGenderSelect}
                    value={searchQuery}
                    selectedGender = {selectedGender}
                    onChange={this.handleSearch}/>

                    <div className="bg-light text-dark p-2 flex-fill bd-highlight rounded border border-2">
                        <FilterDiv header = {header}
                                   value={searchQuery}
                                    onChange={this.handleSearch}/>

                        <UserDetail  
                            user = {user}/> 
                        
                        <Footer
                            dataIndex = {userIndexInDb}
                            dataCount= {totalUsersCount}
                            onPageChange = {this.handlePageChange}
                            />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default UserDetails;