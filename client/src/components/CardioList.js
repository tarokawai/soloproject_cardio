import React, {useState, useEffect} from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
const CardioList = (props) => {
    const { removeFromDom, cardiosAll, setCardiosAll} = props;

    const deleteCardio = (cardioId) => {
        axios.delete('http://localhost:8000/api/cardios/' + cardioId)
            .then(res => {
                removeFromDom(cardioId)
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get("http://localhost:8000/api/cardios")
            .then((res)=>{
            console.log(res.data);
               setCardiosAll(res.data);
            })
                .catch((err)=>{
                console.log(err);
        })
    }, [])

    return (
        <div class="App_link">
        <br />
            <h2>Clients List</h2>
            
            <hr />
            
            {
                cardiosAll.map((cardio, index) => (
                    <div key={index}>
                    
                    <h3>Name: {cardio.name}</h3>
                    
                    <p>Age: {cardio.ageGroup}</p>
                    
                    <p>Gender: {cardio.gender}</p>
                    <p>Weight(lbs): {cardio.weight} lbs</p>
                    <p>Height(inch): {cardio.height} inch</p> 
                    
                    <p><Link to={`/cardios/${cardio._id}`}>
                            {cardio.name} Detail
                        </Link>
                    </p>
                    <p>
                        <Link to={'/cardios/edit/' + cardio._id}>
                        {cardio.name} Edit
                        </Link>
                    </p>
                    <p>
                    <button onClick={(e)=>{deleteCardio(cardio._id)}}>
                    Delete
                    </button>
                    
                    
                    
                    </p>
                    <hr />
                    </div>
                ))
            }
           
        </div>


        // <div>
        //     {
        //         cardios.map((cardio, index)=>{
        //                return <p key={index}>{cardio.fullName}, {cardio.email}, {cardio.ageGroup}, {cardio.gender}</p>
        //                 })
        //             }
        //         </div>
           )
}
export default CardioList;


// import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
// const PersonList = (props) => {
//     /* We deconstruct getter and setter which were passed down 
//     via props by the parent component (app.js) to our child 
//     component (PersonList.js). Now we can easily use the getter 
//     and setter without having to write props.getter or props.setter every time: */
//     const {people, setPeople} = props;
    
//     useEffect(()=>{
//     	axios.get("http://localhost:8000/api/people")
//     	.then((res)=>{
// 	    console.log(res.data);
//             setPeople(res.data);
// 	})
//     	.catch((err)=>{
//             console.log(err);
//     	});
//     }, []);
    
//     return (
//          <div>
//             {
//                 people.map((person, index)=>{
//                 return (
//                     <div key={index}> /* Like our JSX return, map requires ONE parent element, so let's refactor. */
//                         <p>{person.lastName}</p> 
//                         <p>{person.firstName}</p>
//                         /* Look to Code Block 3. That :id gets its value right here. */
//                         /* Clicking this element will assign the "id" param the value of this document's _id field */
//                         /* This will take us to a path similar to "localhost:3000/people/627837837af9898989c9848" */
//                         <Link to={`/people/${person._id}`}> {person.firstName}'s Page! </Link>
//                     </div> 
//                 )});
//             }
//         </div>
//     );
// }
// export default PersonList;





// import React, {useState, useEffect} from 'react'
// import axios from 'axios';
// const PersonList = (props) => {
//     /* We deconstruct getter and setter which were passed down 
//     via props by the parent component (app.js) to our child 
//     component (PersonList.js). Now we can easily use the getter 
//     and setter without having to write props.getter or props.setter every time: */
//     const {people, setPeople} = props;
    
//     useEffect(()=>{
//     	axios.get("http://localhost:8000/api/people")
//     	.then((res)=>{
// 	    console.log(res.data);
//             setPeople(res.data);
// 	})
//     	.catch((err)=>{
//             console.log(err);
//     	})
//     }, [])
    
//     return (
//         <div>
//             {
//                 people.map((person, index)=>{
//                 return <p key={index}>{person.lastName}, {person.firstName}</p>
//                 })
//             }
//         </div>
//     )
// }
// export default PersonList;