
import React, { Component } from 'react';
import { searchActivities } from '../../services/activityService';
import {Form, Row,Col, Dropdown,Button} from 'react-bootstrap'
import './SearchBar.css';
import DatePicker from "react-datepicker";
//import { DateRangePicker } from "react-date-range";
//import { Calendar } from "react-date-range";
//import { DateRange } from "react-date-range";
//import './DatePicker.js';
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class SearchBar extends Component {
  
    state = {
      where: '',
      startDate: '',
      endDate :'',
      type :'',

    };
  

  handleFormSubmission = event => {
    event.preventDefault();
    const { where, startDate,endDate,type } = this.state;
    //this.props.history.push(`/search?where=${where}`);
    const search = {
        destination: where,
        startDate : startDate,
        endDate : endDate,
        type :type,
    };

    console.log(search);
    searchActivities(search)
      .then(searchActivities => {
          this.setState({ 
              searchActivities: searchActivities
            });
        console.log(searchActivities);
      })
      .catch((err)=>{
          console.log(err)
      })

  };

  handleSearchInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  setSelectedDate = (selectedDate, name) => {
    console.log(typeof selectedDate)
    let date = new Date(selectedDate);
    console.log({ [name]: date })
    this.setState({ [name]: selectedDate });
  };

  

  render() {
      //const startDate= new Date();
      // console.log ('searchbar.es:',this.state)
      // console.log ('searchbar.es:',this.props)
       const {startDate,endDate,destinations, type} =this.state

    return (
        <>
 
          <div className="searchArea-wrapper-outer">
            <div className="searchArea-wrapper-inner">
              <Form className="search-bar mt-3" onSubmit={this.handleFormSubmission}>
                <Row >
                  <Col>
                    <label> Destination
                      <input
                      type="search"
                      placeholder="Maldives..."
                      name = "where"
                      value={this.state.where}
                      onChange={this.handleSearchInputChange}
                      />
                    </label>
                  </Col>
                  <Col>
                    <label> Check in
                      <DatePicker
                      selected={startDate}
                      name="startDate"
                      onChange={(date) => this.setSelectedDate(date, "startDate")}
                      dateFormat="dd/MM/yyyy"
                      //filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
                      isClearable
                      /> 
                    </label>
                  </Col>
                  <Col>
                    <label> Check out
                      <DatePicker
                      selected={endDate}
                      name="endDate"
                      onChange={(date) => this.setSelectedDate(date, "endDate")}
                      dateFormat="dd/MM/yyyy"
                      //filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
                      isClearable
                      /> 
                    </label>
                  </Col>
                  <Col>
                  <label> Type
                    <select
                        type="search"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleSearchInputChange}
                        >
                        <option value="Diving">Diving</option>
                        <option value="Sailing">Sailing</option>
                        <option value="Surfing">Surfing</option>
                        <option value="Kite Surfing">Kite Surfing</option>
                    </select>
                  </label>
                      {/* <Form.Group as={Col} controlId="formGridSType">
                        <Form.Label> Actvity Type</Form.Label>
                        <Form.Control  type="search" name="type" value={this.state.type} onChange={this.handleSearchInputChange}as="select" defaultValue="Choose...">
                          <option> Activity Type</option>
                          <option value="Diving"> Diving</option>
                          <option value="Sailing"> Sailing</option>
                          <option value="Surfing">Surfing</option>
                          <option value="Kite Surfing">Kite Surfing</option>
                        </Form.Control>
                      </Form.Group> */}

                    </Col>
                     <Col>
                      <button type="submit" className='btn-lg' style={{backgroundColor: '#062dba', color: 'white'}}>Search</button>      
                    </Col>
                </Row>
              </Form>
            </div>
          </div>
          
            <div className ='searchContainer row mx-md-n5'>
              {this.state.searchActivities  ? this.state.searchActivities.map((el, idx) => (
                <div key={idx}>   
                    <img src={el.photoUrl} alt="ActivityList" className="img"  style={{width:'10%' ,display:'flex',flexDirection:'row' }}/>
                    <div className= 'contentText'>  {el.name}</div>
                    <div>{el.description}</div> 
     
               </div>        
            )): ''}
          </div>
     </>
    );
  }
}


export default SearchBar
// In the search bar component, we'll need to use the history prop
// that is passed by the router to any view
// Since this component IS NOT a view (it's not being passed to a Route component)
// we need to wrap it in the `withRouter` function
// const SearchBarWithRouterProps = withRouter(SearchBar);

// export default SearchBarWithRouterProps;