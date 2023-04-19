import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneCardio = (props) => {
    //BEcause we named the variable in our app.js path id, that is its key.
    //We gave that variable its value in Display.js when we traveled here via "Link".
        //That will allow us to deconstruct the value from props using the id key.
    const { id } = useParams();
    const [oneCardio, setOneCardio] = useState({});

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
    }, [id]); //React will give us an "unused dependency" Yellow-Label Warning if we do not include this in the dependency array
    //Functionally, this is useless, we do not need this useEffect to run based on the changing of the id while in this component because there are no changes occurring here.
    //So in this example the above or simply [] will work the same way. We can just do this to eliminate the warning.

    return (
        <div className="oneProduct-component">
            <h2>{oneCardio.name}</h2>
            <p>Age: {oneCardio.ageGroup}</p>
            <p>Body Type: {oneCardio.bodyType}</p>
        </div>
    );
};

export default OneCardio;