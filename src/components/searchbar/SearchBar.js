import React, { Component } from 'react';
import { searchActivities } from '../../services/activityService';
import { Link} from 'react-router-dom';

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
        destinations:where,
        startDate : startDate,
        endDate : endDate,
        type :type,
    }
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


  handleWhereInputChange = event => {
    const { value } = event.target;
    this.setState({
      where: value
    });
  };

  render() {
    return (
        <div>
            {/* {this.state.searchActivities.map((el, idx) => (
                <div key={idx}>   
                    <img src={el.photoUrl} alt="ActivityList" className="img"  style={{width: '50%' }}/>
                    <div className= 'contentText'>  {el.name}</div>
                    <div>{el.description}</div>   
                    <div>{el.startDate}</div>   */}
                    {/* <div>{el.endDate}</div>  
                    <div>{el.duration}</div>  
                    <div>{el.price}</div> 
                    <div>{el.type}</div>  
                    <div>{el.address}</div>   */}
                    {/* <div>{el.host}</div>  
                    <Link to={"/activities/details/" + el._id} >
                    <div className="btn btn-primary">details</div>  
                    </Link>
                            
               </div>        
            ))} */}


    
        <form className="search-bar" onSubmit={this.handleFormSubmission}>
            <input
            type="search"
            placeholder="Where do you want to travel to..."
            value={this.state.where}
            onChange={this.handleWhereInputChange}
            />
            <button>Where</button>
        </form>
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
