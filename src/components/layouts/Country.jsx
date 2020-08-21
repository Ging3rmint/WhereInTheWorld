import React from "react";
import {Link} from "react-router-dom";
import NumberWithCommas from "../modules/NumberWithCommas";

const Country = (props) => {

    return(
        <div className="country-container">
            <div className="img-box">
               <Link to={"/" + props.countryName}><img src={props.countryFlag} alt="flag-img"/></Link> 
            </div>
            <div className="text-box">
                <h3 >{props.countryName}</h3>
                <p> <span>Population:</span>  {NumberWithCommas(props.population)}</p>
                <p> <span>Region:</span> {props.region}</p>
                <p> <span>Capital:</span>  {props.capital}</p>

            </div>
            
        </div>

    );
}

export default Country;