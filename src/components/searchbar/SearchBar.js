import React, { Component } from 'react';
import { searchActivities } from '../../services/activityService';
import { Link} from 'react-router-dom';
import {Form, Button,Container,Row,Col,Control} from 'react-bootstrap'
import './SearchBar.css';
import DatePicker from "react-datepicker";
//import { DateRangePicker } from "react-date-range";
//import { Calendar } from "react-date-range";
//import { DateRange } from "react-date-range";
//import './DatePicker.js';
// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

export class SearchBar extends Component {
  
    state = {
      where: '',
      startDate: '',
      endDate :'',
      type :'',
      searchActivities:[]
      // selectionRange :{
      //   startDate: new Date(),
      //   endDate: new Date(),
      //   key: 'selection',
      //   }
    };
  

  handleFormSubmission = event => {
    event.preventDefault();
    const { where, startDate,endDate,type } = this.state;
    //this.props.history.push(`/search?where=${where}`);
    const search = {
        destinations: where,
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
    this.setState({ [name]: selectedDate });
  };

  //DATA RANGE CALENDAR 


  //DATA RANGE PICKER
  
  // handleSelect= (ranges)=> {
  //   this.setState({
  //     selectionRange:{
  //       startDate: ranges.selection.startDate,
  //       endDate: ranges.selection.endDate,
  //       key: 'selection',
  //     }
  //       }
  //   );
    
  //   }


  // handleDatePickerChange = (date) => {
  //   console.log(date);
  //   this.setState({
  //     startDate:date
  //     endDate :date
  //   });
  // };

  render() {

    // const selectionRange = {
    //       startDate: new Date(),
    //       endDate: new Date(),
    //       key: 'selection',
    //       };

    
    //const startDate= new Date();
      // console.log ('searchbar.es:',this.state)
      // console.log ('searchbar.es:',this.props)
       const {startDate,endDate,destinations, type} =this.state
      
      // return (<div>

      //         <DatePicker
      //             selected={startDate}
      //             name="startDate"
      //            // onChange={(startDate) => this.setSelectedDate(startDate)}
      //             dateFormat="dd/MM/yyyy"
      //             filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
      //             isClearable
      //           /> 


      // </div>)

      
     

    return (
        <>

              {/* <DatePicker 
              selected={startDate}
              onChange={this.handleDatePickerChange}
              dropdownMode="select"              
              /> */}
            
              {/* <DateRange
                onInit={this.handleSelect}
                onChange={this.handleSelect}
              /> */}
          
            
              {/* <DateRangePicker
                ranges={[selectionRange]}
                onChange={this.handleSelect}
                showSelectionPreview="false"
                showMonthAndYearPickers="false"
                showPreview ="false"
              /> */}
            
                   <DatePicker
                  selected={startDate}
                  name="startDate"
                  onChange={(date) => this.setSelectedDate(startDate, "startDate")}
                  dateFormat="dd/MM/yyyy"
                  //filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
                  isClearable
                /> 
                 <DatePicker
                
                  selected={endDate}
                  name="endDate"
                  onChange={(endDate) => this.setSelectedDate(endDate,"endDate")}
                  dateFormat="dd/MM/yyyy"
                  filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
                  isClearable 
                /> 


            <Form className="search-bar mt-3" onSubmit={this.handleFormSubmission}>
                <Row>
                        <Col>
                              <input
                              type="search"
                              placeholder="Where do you want to travel to..."
                              name = "where"
                              value={this.state.where}
                              onChange={this.handleSearchInputChange}
                              />
                       
                         </Col>
                         <Col>
                              {/* <input
                              type="datetime-local"
                              placeholder="When do you want to start to travel..."
                              name="startDate"
                              value={this.state.startDate}
                              onChange={this.handleSearchInputChange}
                              // className="tp-search-date tp-departing-date-wrap w-50 float-left"
                              /> */}

                            <DatePicker
                              selected={startDate}
                              name="startDate"
                              onChange={(date) => this.setSelectedDate(startDate, "startDate")}
                              dateFormat="dd/MM/yyyy"
                              //filterDate={(date) => date.getDay() !== 6 || date.getDay() !== 0}
                              isClearable
                            /> 
                          </Col>
                          <Col>
                                <input
                                type="text"
                                placeholder="Departing?"
                                name="endDate"
                                value={this.state.endDate}
                                onChange={this.handleSearchInputChange}
                                //className="tp-search-date tp-departing-date-wrap w-50 float-left"
                                />
                            </Col>
                            <Col  >
                                    {/* <Form.Label>Type</Form.Label> */}
                                    
                                    <input
                                    type="search"
                                    placeholder="What kind of travel are you searching for...?"
                                    name="type"
                                    value={this.state.type}
                                     
                                    onChange={this.handleSearchInputChange}
                                    //className="select w-50"
                                    />
                                     {/* <Form.Control as="select">
                                        <option>Diving</option>
                                        <option>Sailing</option>
                                        <option>Surfing</option>
                                        <option>Kite Surfing</option>
                                      </Form.Control> */}
                              </Col>
                              <Col>
                                 <button type="submit" className='btn-lg' style={{backgroundColor: '#062dba', color: 'white'}}>Search</button>
                              </Col>
                </Row>
            </Form>

          

            {this.state.searchActivities  ? this.state.searchActivities.map((el, idx) => (
                <div key={idx}>   
                    <img src={el.photoUrl} alt="ActivityList" className="img"  style={{width: '50%' }}/>
                    <div className= 'contentText'>  {el.name}</div>
                    <div>{el.description}</div>   
                    <div>{el.startDate}</div>   
                    {/* <div>{el.endDate}</div>  
                    <div>{el.duration}</div>  
                    <div>{el.price}</div> 
                    <div>{el.type}</div>  
                    <div>{el.address}</div>   */}
                    <div>{el.host}</div>  
                    <Link to={"/activities/details/" + el._id} >
                    <div className="btn btn-primary">details</div>  
                    </Link>
                            
               </div>        
            )): ''}
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
