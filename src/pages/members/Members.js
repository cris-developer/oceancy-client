import React, { Component } from 'react'
import { getAllProfiles} from '../../services/userService';
import ProfileCard from '../../components/profilecard/ProfileCard'
//import {  Link } from "react-router-dom";
//import './Members.css'
//import Footer from "../../components/footer/Footer";


export class Members extends Component {

    state = {
        userList: [],
        favoriteActivitySearch : '',
        levelSearch:''
    }

    componentDidMount () {
        getAllProfiles()
        .then ((res) =>
            this.setState({
                userList :res
            }))    
      }

      favoriteActivityHandleChange = (e) => {
        this.setState({
          favoriteActivitySearch: e.target.value,
        });
      };
    
      levelHandleChange = (e) => {
        this.setState({
          levelSearch: e.target.value,
        });
      };


     render() {

        const filterUserList= this.state.userList.filter(user=> {
            

            if (this.state.favoriteActivitySearch ) {

                if (user.favoriteActivity.toLowerCase() !== this.state.favoriteActivitySearch.toLowerCase() ) {
                    return false
                } 

            }

            if (this.state.levelSearch ) {

                if (user.level.toLowerCase() !== this.state.levelSearch.toLowerCase()) {
                    return false
                } 
                
            } 
            return true

            
            } )

        return (
            <div>
                <div className='banner'>
                 <h2 className='headerText'>Members</h2>
               </div>
               
               <input
                value={this.state.favoriteActivitySearch}
                onChange= {this.favoriteActivityHandleChange}
                placeholder='search by favoriteActivity'
               />

                <input
                value={this.state.levelSearch}
                onChange= {this.levelHandleChange}
                placeholder='search by levelActivity'
               />


               <div className="profile-card-wrapper">


                    {filterUserList.map((el, idx) => (
                      
                        <ProfileCard 
                            key={idx} 
                            photoUrl={el.photoUrl}
                            fullName={el.fullName}
                            favoriteActivity={el.favoriteActivity}
                            level={el.level}
                            >
                        </ProfileCard>
                
                  ))}
                    </div>
             {/* <Footer/> */}
            </div>
        )
    }
 
}

export default Members





// export default class Activities extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userList: [],
//       Search: ''
//     };
//   }

//   componentDidMount() {
//     getAllActivities()
//     .then((res) =>
//       this.setState({
//         userList: res,
//       }));
//   }

//   handleChange = (e) => {
//     this.setState({
//       Search: e.target.value,
//     });
//     this.searchMembers(this.state.Search)
//   };

// //   searchMembers = (params) => {
// //     searchMembers(this.state.Search)
// //       .then (res => this.setState({userList : res}))
// //   }

//   render() {

//     return (
//       <div className="mt-3">
//         <div className='banner'>
//                  <h2 className='headerText'>Activities</h2>
//           </div>
//          <Link to={"/userList/create/"} >
//                        <div className="btn btn-primary">Create</div>  
//           </Link>
//           <div className="mt-3">
//              <main className ='container' style= {{textAlign:'center'}}> 
//               <div className ='rowActivities'>
   
//                     <div className="activity-card-wrapper">
//                     {this.state.userList.map((el, idx) => (
                      
//                         <MembersCard 
//                             key={idx} 
//                             photoUrl={el.photoUrl}
//                             name={el.name}
//                             destination={el.destination}
//                             price={el.price}
//                             duration={el.duration}
//                             id={el._id}
//                             >
//                         </MembersCard>
                
//                   ))}
//                     </div>
//                 </div>
//            </main>
//           </div>
//        </div>

//     );
//   }
// }
