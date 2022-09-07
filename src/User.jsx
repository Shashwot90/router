import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const User = () => {
    const {fname} = useParams();
    const locations = useLocation();
    const history = useNavigate();
    console.log(history);
    return (
        <>
        <h1>This is {fname}  page </h1>
        <p>My current location is {locations.pathname} </p>
        {locations.pathname === `/user/htm` ? (<button onClick={() => history(-1)}

        >Click Me To Go Back</button>):null}
        </>
    )
}
export default User;