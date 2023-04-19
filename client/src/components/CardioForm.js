import React, { useEffect, useState } from 'react'
import axios from 'axios'
const CardioForm = (props) => { 

    const {cardiosAll, setCardiosAll} = props;

    const [name, setName] = useState("");
    const [ageGroup, setAgeGroup] = useState(""); 
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bodyType, setBodyType] = useState("");
    const [activityLevel, setActivityLevel] = useState("");
    const [todayEx1, setTodayEx1] = useState("Rest");
    const [todayEx1Comp, setTodayEx1Comp] = useState("false");
    const [todayEx2, setTodayEx2] = useState("Rest");
    const [todayEx2Comp, setTodayEx2Comp] = useState("false");
    const [todayEx3, setTodayEx3] = useState("Rest");
    const [todayEx3Comp, setTodayEx3Comp] = useState("false");
    const [tomorrowEx1, setTomorrowEx1] = useState("Rest");
    const [tomorrowEx1Comp, setTomorrowEx1Comp] = useState("false");
    const [tomorrowEx2, setTomorrowEx2] = useState("Rest");
    const [tomorrowEx2Comp, setTomorrowEx2Comp] = useState("false");
    const [tomorrowEx3, setTomorrowEx3] = useState("Rest");
    const [tomorrowEx3Comp, setTomorrowEx3Comp] = useState("false");
    const [bmr, setBmr] = useState("0");
    const [totalCal2Days, setTotalCal2Days] = useState("0");
    const [totalMin2Days, setTotalMin2Days] = useState("0");
    const [totalCalToday, setTotalCalToday] = useState("0");
    const [totalMinToday, setTotalMinToday] = useState("0");
    const [totalCalTomorrow, setTotalCalTomorrow] = useState("0");
    const [totalMinTomorrow, setTotalMinTomorrow] = useState("0");
    
    //const [createdAt, setCreatedAt] = useState("");
    //const [updatedAt, setUpdatedAt] = useState("");


   
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/cardios', {
    
            name,
            ageGroup,
            gender,
            weight,
            height,
            bodyType,
            activityLevel,
            todayEx1,
            todayEx1Comp,
            todayEx2,
            todayEx2Comp,
            todayEx3,
            todayEx3Comp,
            tomorrowEx1,
            tomorrowEx1Comp,
            tomorrowEx2,
            tomorrowEx2Comp,
            tomorrowEx3,
            tomorrowEx3Comp,
            bmr,
            totalCal2Days,
            totalMin2Days,
            totalCalToday,
            totalMinToday,
            totalCalTomorrow,
            totalMinTomorrow,
            
            // createdAt,
            // updatedAt

        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                setCardiosAll([...cardiosAll, res.data]); //this is new
                setName("");
                setAgeGroup("");
                setGender("");
                setWeight("");
                setHeight("");
                setBodyType("");
                setActivityLevel("");
                setTodayEx1("");
                setTodayEx1Comp("");
                setTodayEx2("");
                setTodayEx2Comp("");
                setTodayEx3("");
                setTodayEx3Comp("");
                setTomorrowEx1("");
                setTomorrowEx1Comp("");
                setTomorrowEx2("");
                setTomorrowEx2Comp("");
                setTomorrowEx3("");
                setTomorrowEx3Comp("");
                setBmr("");
                setTotalCal2Days("");
                setTotalMin2Days("");
                setTotalCalToday("");
                setTotalMinToday("");
                setTotalCalTomorrow("");
                setTotalMinTomorrow("");
                  
            })
            .catch(err=>console.log(err))
    
        }
        // const totalMinTodayFunc = (todayEx1, todayEx2, todayEx3) =>{ 
        //     let x1 = 0;
        //     let x2 = 0;
        //     let x3 = 0;
        //     let y = 0;
            
        //     if (todayEx1 =="Rest"){ x1 = 0;} else { x1 = 15;};
        //     if (todayEx2 =="Rest"){ x2 = 0;} else { x2 = 15;};
        //     if (todayEx3 =="Rest"){ x3 = 0;} else { x3 = 15;};
        //     y = x1 + x2 + x3;
        //     alert(y);
        //     return totalCalToday = y;
            
        // } 
    // const [ message, setMessage ] = useState("Loading some fun...")
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api")
    //     .then(res=>setMessage(res.data.message))
    //         .catch(err=>console.log(err))
    // }, [])


    return (
        <div class="my_page_panel">
        
        
        <h2>2 times 2 days 15min Bouts. That's All!!</h2>
        <h3>Find 15min bouts in  your New York life. NYers familiar activities make meet FDA requirement of 150 minimum requirement. N0 efforts</h3>
        <br />
        <form onSubmit={onSubmitHandler}>
            
            <p>
                <label>Nick Name</label><br/>
                <input type="text" onChange = {(e)=>setName(e.target.value)}/>
            </p>
            
            <p>
                <label>Age</label><br/>
                <input type="number" onChange = {(e)=>setAgeGroup(e.target.value)}/>
            </p>
            
            <p>
                 <label>Gender</label><br/>
                <select type="text" onChange = {(e)=>setGender(e.target.value)}>
                    <option value="">Choose One</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="">No Binary</option>
                    <option value="">No Answer</option>
                    
                </select>
        
            </p>
            
            <p>
                <label>Height(inch)</label><br/>
                <input type="number" onChange = {(e)=>setHeight(e.target.value)}/>
            </p>
            
            <p>
                <label>Weight(lbs)</label><br/>
                <input type="number" onChange = {(e)=>setWeight(e.target.value)}/>
            </p>
            
            <p> 
            <label>Today cardio 1</label><br/>
            <select type="text" onChange = {(e)=>setTodayEx1(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <p> 
            <label>Today cardio 2</label><br/>
            <select type="text" onChange = {(e)=>setTodayEx2(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <p> 
            <label>Today cardio 3</label><br/>
            <select type="text" onChange = {(e)=>setTodayEx3(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <p> 
            <label>Tomorrow cardio 1</label><br/>
            <select type="text" onChange = {(e)=>setTomorrowEx1(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <p> 
            <label>Tomorrow cardio 2</label><br/>
            <select type="text" onChange = {(e)=>setTomorrowEx2(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <p> 
            <label>Tomorrow cardio 3</label><br/>
            <select type="text" onChange = {(e)=>setTomorrowEx3(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="Rest">Rest</option>
            </select>
            </p>
            
            <input type="submit" value="Create Your Client's Cardio"/>
            
        </form>
        <br />
        </div>
       
    )
}
export default CardioForm;

