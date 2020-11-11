import React, { Component } from 'react';
import { searchActivities } from '../../services/activityService';
import {Form, Row,Col} from 'react-bootstrap'
import './SearchBar.css';
import DatePicker from "react-datepicker";
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
    console.log(where, startDate, endDate, type);
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

        this.props.renderSearchResults(searchActivities)
        //   this.setState({ 
        //       searchActivities: searchActivities
        //     });
        // console.log(searchActivities);
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
       const {startDate,endDate,where, type} =this.state

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
                      value={where}
                      onChange={this.handleSearchInputChange}
                      />
                    </label>
                    <i className="ti-location-pin" />
                    <i className="fa fa-dot-circle-o" />
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
                    <i className="fa fa-calendar-minus-o" />
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
                    <i className="fa fa-calendar-minus-o" />
                  </Col>
                  <Col>
                  {/* <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="custom-dropdown">
                      Select an activity
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="Diving">Diving</Dropdown.Item>
                      <Dropdown.Item eventKey="Sailing">Sailing</Dropdown.Item>
                      <Dropdown.Item eventKey="Surfing">Surfing</Dropdown.Item>
                      <Dropdown.Item eventKey="Kite Surfing">Kite Surfing</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                  <label> Type
                    <div>
                      <select
                        type="search"
                        name="type"
                        value={type}
                        onChange={this.handleSearchInputChange}
                        className="custom-dropdown"
                        >
                        <option value="">Select an activity</option>
                        <option value="Diving">Diving</option>
                        <option value="Sailing">Sailing</option>
                        <option value="Surfing">Surfing</option>
                        <option value="Kite Surfing">Kite Surfing</option>
                    </select>
                    </div>
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