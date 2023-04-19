import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';


const Update = (props) => {
    const { id } = useParams(); 
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
    
    
    const [bmr, setBmr] = useState(0);
    const [totalCal2Days, setTotalCal2Days] = useState(0);
    const [totalMin2Days, setTotalMin2Days] = useState(0);
    const [totalCalToday, setTotalCalToday] = useState(0);
    const [totalMinToday, setTotalMinToday] = useState(0);
    const [totalCalTomorrow, setTotalCalTomorrow] = useState(0);
    const [totalMinTomorrow, setTotalMinTomorrow] = useState(0);

    const navigate = useNavigate();

    // const [headerName, setHeaderName] = useState("");
    
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/cardios/${id}`)
            .then((res) => {
                setName(res.data.name);
                setAgeGroup(res.data.ageGroup);
                setGender(res.data.gender);
                setWeight(res.data.weight);
                setHeight(res.data.height);
                setBodyType(res.data.bodyType);
                setActivityLevel(res.data.activityLevel);
                setTodayEx1(res.data.todayEx1);
                setTodayEx1Comp(res.data.todayEx1Comp);
                setTodayEx2(res.data.todayEx2);
                setTodayEx2Comp(res.data.todayEx2Comp);
                setTodayEx3(res.data.todayEx3);
                setTodayEx3Comp(res.data.todayEx3Comp);
                setTomorrowEx1(res.data.tomorrowEx1);
                setTomorrowEx1Comp(res.data.tomorrowEx1Comp);
                setTomorrowEx2(res.data.tomorrowEx2);
                setTomorrowEx2Comp(res.data.todayEx2Comp);
                setTomorrowEx3(res.data.tomorrowEx3);
                setTomorrowEx3Comp(res.data.todayEx3Comp);
                setBmr(res.data.bmr);
                setTotalCal2Days(res.data.totalCal2Days);
                setTotalMin2Days(res.data.totalMin2Days);
                setTotalCalToday(res.data.totalCalToday);
                setTotalMinToday(res.data.setTotalMinToday);
                setTotalCalTomorrow(res.data.totalCalTomorrow);
                setTotalMinTomorrow(res.data.totalMinTomorrow);
            })
            .catch(err => console.log(err))
    }, [])
    const updateCardio = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/cardios/${id}`, {
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
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/"); //No need to worry about state here. Navigate will trigger a total rerender of Main/DisplayAll which will update our list via useEffect in Display
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <div>
        <header><h2>Edit { name }</h2>
        <p>HEIGHT: { height }, WEIGHT: { weight }, AGE: {ageGroup }</p></header>
            <h2>Update a Client</h2>
         <form onSubmit={updateCardio}>
             <p>
                 <label>Nick Name</label><br/>
                 <input type="text" value= {name} onChange = {(e)=> setName(e.target.value)}/>
            </p> 
                <p>
                <label>Age</label><br/>
                <input type="number"  value= {ageGroup} onChange = {(e)=>setAgeGroup(e.target.value)}/>
            </p>
            <p>
                 <label>Gender</label><br/>
                <select type="text" value = { gender } onChange = {(e)=>setGender(e.target.value)}>
                    <option value="">Choose One</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="">No Binary</option>
                    <option value="">No Answer</option>
                    
                </select>
        
            </p>
            <p>
                <label>Height(inch)</label><br/>
                <input type="number" value={ height } onChange = {(e)=>setHeight(e.target.value)}/>
            </p>
            <p>
                <label>Weight(lbs)</label><br/>
                <input type="number" value={ weight } onChange = {(e)=>setWeight(e.target.value)}/>
            </p>
        

            <hr />
            <p> 
            <label>Today cardio 1</label><br/>
            <select type="text" value={ todayEx1} onChange = {(e)=>setTodayEx1(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
            <p> 
            <label>Today cardio 2</label><br/>
            <select type="text" value={ todayEx2} onChange = {(e)=>setTodayEx2(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
            <p> 
            <label>Today cardio 3</label><br/>
            <select type="text" value={ todayEx3 } onChange = {(e)=>setTodayEx3(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
            <hr />
            <p> 
            <label>Tomorrow cardio 1</label><br/>
            <select type="text" value={ tomorrowEx1} onChange = {(e)=>setTomorrowEx1(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
            <p> 
            <label>Tomorrow cardio 2</label><br/>
            <select type="text" value={ tomorrowEx2} onChange = {(e)=>setTomorrowEx2(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
            <p> 
            <label>Tomorrow cardio 3</label><br/>
            <select type="text" value={ tomorrowEx3} onChange = {(e)=>setTomorrowEx3(e.target.value)}>
                <option value="-">Choose One</option>
                <option value="walk">Skip 2 Subway Stations and Walk (15min)</option>
                <option value="bike">Ride CitiBike for Commute (15min)</option>
                <option value="run">Run with Dogs and Cats in the parks (15min)</option>
                <option value="other">Other Moderate Cardio Activities (15min)</option>
                <option value="rest">Rest</option>
            </select>
            </p>
                <input class="submit-input" type="submit" value="Update"  />
            </form>

            <p><Link to={`/cardios/${id}`}>
                            {id.name} Back To Detail
                        </Link>
                    </p>
            <p><Link to={`/`}>
                    {id.name} Back To Home
                </Link>
            </p>        
        </div>
    )
}
export default Update;
