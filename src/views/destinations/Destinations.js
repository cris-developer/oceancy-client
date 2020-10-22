import React, { Component } from 'react'

//import destinations from '../../destinations.json'
import NavBar from '../../components/navbar/NavBar';
import { getAllDestinations } from '../../services/destinationService';
import { Link } from 'react-router-dom';

// class Destinations extends Component {

//     state = {
//         //destinations :destinations
//         destinations: destinations.slice(0, 3)
//       }



//       componentDidMount = () => {
//         this.updateCottageList();
//       };

//       updateCottageList = () => {
//         getallCottages(localStorage.getItem("accessToken"))
//           .then((srvrResp) => {
//             console.log(srvrResp.allCottages);
//             const { allCottages: cottagesList } = srvrResp;
//             this.setState({ cottagesList });
//           })
//           .catch((err) => console.log(err));
//       };
    
      
//       export const getAllDestinations = () => {
//         return service
//           .get(`/`)
//           .then((response) => response.data)
//           .catch((err) => err);
//       };
    
//     //   componentDidMount() {
//     //    
//     //        .getAllDestinations
//     //        .then(res => {
//     //         const persons = res.data;
//     //         this.setState({ persons });
//     //       })
//     //   }
//      
    
//     render() {
//         return (
//             <div>
            
//                <section>
//                 <h2>Destinations</h2>
//                 </section>
//                 <section >
//                 <table>
//                     <thead>
//                         <tr>
//                             <th id="heading">Picture</th>
//                             <th d="heading">Name</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {this.state.destinations.map((el, idx) => (
//                         <tr key={idx}>
//                         <th>
//                             <img src={el.photoUrl} alt="Contact" />
//                         </th>
//                             <th className= 'contentText'>  {el.name}</th>
//                         </tr>
//                     ))}
//                     </tbody>
//                 </table>
//             </section> 
//         </div>
//         )
//     }
// }

// export default Destinations;


// // class Destinations extends Component {
// //     constructor(props) {
// //       super(props)
// //       this.state = {
// //         destinations: []
// //       }
// //     }
  
// //     componentDidMount() {
// //       axios.get(`https://jsonplaceholder.typicode.com/users`)
// //         .then(res => {
// //           const persons = res.data;
// //           this.setState({ persons });
// //         })
// //     }
  
// //     render() {
// //       return (
// //         <ul>
// //           { this.state.persons.map(person => <li>{person.name}</li>) }
// //         </ul>
// //       )
// //     }
// //   }


export default class Listdestinations extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        destinations: [],
        Search: ''
      };
    }
  
    componentDidMount() {
        getAllDestinations().then((res) =>{
        console.log("RESPUESTA DEL SERVICE", res)
        this.setState({
          destinations: res,
        })
    }
      );
    }
  
    handleChange = (e) => {
      this.setState({
        Search: e.target.value,
      });
      this.searchdestinations(this.state.Search)
    };
  
    searchDestinations = (params) => {
      this.searchDestinations(this.state.Search)
        .then (res => this.setState({destinations : res}))
    }
  
    render() {
         console.log(this.state.destinations);
        return (
          <div>
            <NavBar />
            <div className="list">
              {this.state.destinations.map((el, idx) => (

                        <tr key={idx}>
                        <th>
                            <img src={el.photoUrl} alt="Contact" />
                        </th>
                            <th className= 'contentText'>  {el.name}</th>
                        </tr>
              ))}
            </div>
          </div>
        );
      }
  }
