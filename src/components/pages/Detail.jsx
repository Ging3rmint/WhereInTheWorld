import React from "react";
import {Link} from "react-router-dom";
import NumberWithCommas from "../modules/NumberWithCommas";
import Backbutton from "../layouts/Backbutton";



const Detail = (props) => {
    const [obj] = props.countryData;
    const {name, nativeName, population, region, subregion, capital,flag, topLevelDomain,
    currencies, languages} = obj;
    const borders = props.countryBorders;
    //array - border, obj- currencies, obj-langauges, topLevelDomain
    // console.log(props.countryBorders);
    console.log(obj);
    console.log(borders)
    return (
        <div className="main-country-container">
            <Backbutton />
            <div className="flag-box">
                <img src={flag} alt="flag-img"/>
            </div>
            <div className="detail-box">
                <h1>{name}</h1>
                <div className="detail-box-inner">
                    <div className="inner-box-1">
                        <p><strong>Native Name:</strong> <span>{nativeName}</span></p>
                        <p><strong>Population:</strong> <span>{NumberWithCommas(population)}</span></p>
                        <p><strong>Region:</strong> <span>{region}</span></p>
                        <p><strong>Sub Region:</strong> <span>{subregion}</span></p>
                        <p><strong>Capital:</strong> <span>{capital}</span></p>    
                    </div>
                    <div className="inner-box-2">
                        <p><strong>Top Level Domain:</strong> <span>{topLevelDomain[0]}</span></p>
                        <p><strong>Currencies:</strong> <span>{currencies[0].name}</span></p>
                        <p><strong>Languages:</strong> 
                        {languages.map((lang, id)=><span key={id}> 
                            {id > 0? ", " + lang.name: " "+lang.name}
                        </span>)}
                        </p>
                    </div>
                </div>
                    <div className="border-box">
                        <div className="border-title">
                        <p className="border"><strong>Border Countries:</strong> </p>
                        </div>
                        
                    
                        <div className="btn-box">
                            {borders.length > 0 && 
                            borders.map((b, id) => <Link key ={id} to={"/"+ b.name}> {b.name}</Link>)}
                        </div>
                    </div>
                   

                
            </div>

        </div>

    );



}

export default Detail;