import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const Detail = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneCardio, setOneCardio] = useState({})
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/cardios/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneCardio(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/cardios/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                //Because the delete request is on a different component, we do not need to update state here.
                    //Navigating back to our Main.js will trigger a total rerender in DisplayAll, 
                        //which will rerun our useEffect, setting state to the most up to date collection list (delete included)
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };
        
    const bmr =  parseInt(66.47 + (6.24 * (oneCardio.weight)) + (12.7 * (oneCardio.height) - (6.755 * (oneCardio.ageGroup))));
    
    const minFormula = (Ex1,Ex2,Ex3) => { 
        let x1 = 0;
        let x2 = 0;
        let x3 = 0;
        let y = 0;
        
        if (Ex1 =="Rest"){ x1 = 0;} else { x1 = 15;};
        if (Ex2 =="Rest"){ x2 = 0;} else { x2 = 15;};
        if (Ex3 =="Rest"){ x3 = 0;} else { x3 = 15;};
        y = x1 + x2 + x3;
        return y;
       } 

    const todayMin = minFormula(oneCardio.todayEx1, oneCardio.todayEx2, oneCardio.todayEx3);
    
    const tomorrowMin = minFormula(oneCardio.tomorrowEx1, oneCardio.tomorrowEx2, oneCardio.tomorrowEx3);

    const twoDayMin = todayMin + tomorrowMin

    const calFormula = (Ex1,Ex2,Ex3) => { 
        let x1 = 0;
        let x2 = 0;
        let x3 = 0;
        let y = 0;
        
        if (Ex1 =="Rest"){ x1 = 3;} else if (Ex1 =="run"){ x1 = 120;} else if (Ex1 =="walk"){ x1 = 60;} else if (Ex1 =="bike"){ x1 = 180;}else if (Ex1 =="other"){ x1 = 80;} else {x1 = 0;};
        if (Ex2 =="Rest"){ x2 = 3;} else if (Ex2 =="run"){ x2 = 120;} else if (Ex2 =="walk"){ x2 = 60;} else if (Ex2 =="bike"){ x2 = 180;}else if (Ex2 =="other"){ x2 = 80;} else {x2 = 0;};
        if (Ex3 =="Rest"){ x3 = 3;} else if (Ex3 =="run"){ x3 = 120;} else if (Ex3 =="walk"){ x3 = 60;} else if (Ex3 =="bike"){ x3 = 180;}else if (Ex3 =="other"){ x3 = 80;} else {x3 = 0;};
y = x1 + x2 + x3;
        return y;
       } 

    const todayCal = calFormula(oneCardio.todayEx1, oneCardio.todayEx2, oneCardio.todayEx3);
    
    const tomorrowCal = calFormula(oneCardio.tomorrowEx1, oneCardio.tomorrowEx2, oneCardio.tomorrowEx3);

    const twoDayCal = todayCal + tomorrowCal
    
    return (
        
        <div>
        
            <br />
            
            
            <h2>Name: { oneCardio.name }</h2>
            <div>
            <h3>BMR: {bmr}</h3>
            
            <h3>Weight:{ oneCardio.weight } lbs.</h3>
            <h3>Height:{ oneCardio.height } inch</h3>
            <p>Gender: { oneCardio.gender }</p>
            <p>Age: { oneCardio.ageGroup }</p>
            </div>
            <hr />
            <div>
            <p> Today Min: { todayMin }</p>
            <p> Tomorrow Min: { tomorrowMin }</p>
            <h3> TOTAL 2 DAY Min: { twoDayMin }</h3>
            </div>
            <div>
            <p>Today Cal: { todayCal }</p>
            <p>Tomorrow Cal: { tomorrowCal }</p>
            <h3>Total 2 DAY Cal: { twoDayCal }</h3>
            </div>
            <hr />
            
            
            <div>
            <p>Today Ex1:{oneCardio.todayEx1}</p>
            <p>Today Ex2:{oneCardio.todayEx2}</p>
            <p>Today EX3:{oneCardio.todayEx3}</p>
            <p>Today's Total Minutes: {oneCardio.totalMinToday}</p>
            </div>

            <hr />
            <div>
            <p>Tomorrow Ex1:{oneCardio.tomorrowEx1}</p>
            <p>Tomorrow Ex2:{oneCardio.tomorrowEx2}</p>
            <p>Tomorrow EX3:{oneCardio.tomorrowEx3}</p>
            
            </div>
            <hr />
            <div>
            <button onClick={deleteHandler}>Delete</button>
            <p>
            <Link to={'/cardios/edit/' + oneCardio._id}>
            {oneCardio.name} Edit
            </Link>
            </p>
            <p><Link to={`/`}>
                    {id.name} Back To Home
                </Link>
            </p> 
            
            </div>
        </div>
        
        
        
    );
}
export default Detail;
