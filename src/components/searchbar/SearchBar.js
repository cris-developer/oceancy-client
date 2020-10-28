import React, { Component } from 'react';
import { searchActivities } from '../../services/activityService';
import { Link} from 'react-router-dom';
import './SearchBar.css'

export class SearchBar extends Component {
  
    state = {
      where: '',
      startDate: '',
      endDate :'',
      type :'',
      searchActivities:[]
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




  render() {
    return (
        <div>

            <form className="search-bar mt-3" onSubmit={this.handleFormSubmission}>
                        <input
                        type="search"
                        placeholder="Where do you want to travel to..."
                        name = "where"
                        value={this.state.where}
                        onChange={this.handleSearchInputChange}
                        />
                        {/* <button type="submit">Where</button> */}
           
                        <input
                        type="search"
                        placeholder="When do you want to start to travel..."
                        name="startDate"
                        value={this.state.startDate}
                        onChange={this.handleSearchInputChange}
                        />
                        {/* <button type="submit">Start Date</button> */}
            
                        <input
                        type="search"
                        placeholder="When do you want to finish your travel..?"
                        name="endDate"
                        value={this.state.endDate}
                        onChange={this.handleSearchInputChange}
                        />
                        {/* <button type="submit">End Date</button> */}

                    
                        <input
                        type="search"
                        placeholder="What kind of travel are you searching for...?"
                        name="type"
                        value={this.state.type}
                        onChange={this.handleSearchInputChange}
                        />
                        <button type="submit">Search</button>
            </form>


            {this.state.searchActivities.map((el, idx) => (
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
            ))}
     </div>
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
