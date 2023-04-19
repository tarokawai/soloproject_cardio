import React, { useState } from 'react'
// import axios from 'axios';
import CardioForm from '../components/CardioForm';
import CardioList from '../components/CardioList';

const Main = () => {
    
    const [cardiosAll, setCardiosAll] = useState([]);

    const removeFromDom = cardioId => {
        setCardiosAll(cardiosAll.filter(cardios => cardios._id != cardioId)); 
    }
    return (
        <div class="row">
        <div class="col-md-6">    	
           <CardioForm cardiosAll={cardiosAll} setCardiosAll={setCardiosAll} />
           
        </div>
        <div class="col-md-6">   
           <CardioList cardiosAll={cardiosAll} setCardiosAll={setCardiosAll} removeFromDom={removeFromDom} />
        </div>
        </div>
    )

}
export default Main;


// import React, { useState } from 'react'
// import axios from 'axios';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
// const Main = (props) => {
    
//     const [people, setPeople] = useState([]);
    
//     return (
//         <div>
//     	/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */
//            <PersonForm people={people} setPeople={setPeople} />
//             <hr/>
//            <PersonList people={people} setPeople={setPeople} />
//         </div>
//     )
// }
// export default Main;