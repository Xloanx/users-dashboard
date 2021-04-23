import React, { Component } from 'react';
import axios from 'axios';
import { paginate } from '../utils/paginate';
import GenderSelectionDiv from './genderSelectionDiv';
import UserCard from './userCard';
import FilterDiv from './filterDiv';
import Footer from './footer';
import { getResult } from '../service/data';


const apiEndPoint = 'https://randomuser.me/api/?results=50&&seed=bf1d471fe1a63382';
class Dashboard extends Component {
    state = { 
        users :[],
        selectedGender: null,
        searchQuery:"",
        currentPage:1,
        pageSize: 3,
        pageArrayState:[]
     }

    
     async componentDidMount() {
        const response = await axios.get(apiEndPoint);
        this.setState({users: response.data.results});
        // const results = getResult();
        // this.setState({ users:results.results })
     }

    handleGenderSelect = gender =>{
        this.setState({selectedGender:gender, searchQuery:"", currentPage:1});  
     }

     handleSearch = query =>{
        this.setState({searchQuery:query, selectedGender: null, currentPage:1});
    }

    handlePageChange= ( currentPage, direction ) =>{
        if (direction == 'right'){
            ++currentPage;
        }
        else{
            --currentPage;
        }
        this.setState({ currentPage });
    }

     getData = () =>{
        const { users, selectedGender, searchQuery, pageSize, currentPage} = this.state;
        let filteredUsers = users;
        let header = 'All Users';
        if (searchQuery){
            filteredUsers = users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().includes(searchQuery.toLowerCase()))
            ?users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().includes(searchQuery.toLowerCase()))
            :users.filter(m=>(m.name.first +' '+m.name.last).toLowerCase().startsWith(searchQuery.toLowerCase()));
        }
        else if ( selectedGender !=='all' && selectedGender !== null) {
           filteredUsers = users.filter(m => m.gender === selectedGender );
           header = selectedGender.charAt(0).toUpperCase()+ selectedGender.slice(1) + " Users";
        }
        const paginatedUsers = paginate(filteredUsers, currentPage, pageSize);
        return {totalCount:filteredUsers.length, data:paginatedUsers, header};
    }

    render() {
        const {searchQuery, selectedGender, pageSize, currentPage, pageArrayState} = this.state;
        const { totalCount, data, header } = this.getData();
        //console.log(data);
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

                        <UserCard filteredUsers = {data} /> 
                        
                        <Footer 
                            dataCount= {totalCount}
                            pageSize ={pageSize}
                            pageArrayState = {pageArrayState}
                            currentPage = {currentPage}
                            onPageChange={this.handlePageChange}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;