import React, { Component } from 'react'
import { getAllProfiles} from '../../services/userService';
import ProfileCard from '../../components/profilecard/ProfileCard'
//import {  Link } from "react-router-dom";
//import './Members.css'


export class Members extends Component {

    state = {
        userList: [],
        Search :''
    }

    componentDidMount () {
        getAllProfiles()
        .then ((res) =>
            this.setState({
                userList :res
            }))    
      }

    //   handleChange = (e) => {
    //     this.setState({
    //       Search: e.target.value,
    //     });
    //     this.searchMembers(this.state.Search)
    //   };
    
    //   searchMembers = (params) => {
    //     searchMembers(this.state.Search)
    //       .then (res => this.setState({userList : res}))
    //   }

     render() {
        return (
            <div>
                <div className='banner'>
                 <h2 className='headerText'>Members</h2>
               </div>
               
               <div className="profile-card-wrapper">
                  {/* {this.state.userList.filter(item => item.favoriteActivity === this.state.Search).map((el, idx) => ( */}
                      
                    {this.state.userList.map((el, idx) => (
                      
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
