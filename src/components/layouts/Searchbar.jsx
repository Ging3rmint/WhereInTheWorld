import React from "react";


const Searchbar = (props) =>{
    const region = ["Africa", "Americas", "Asia", "Europe", "Oceania", "Polar"];
    return(
        <div className="filter-container">
            <div className="search-box">
                <i className="fas fa-search search-icon"></i>
                <input onChange = {props.onChange} value={props.value} className="input-search" type="text" placeholder="Search for a country..." />
            </div>
            <div className="select-box">
                <select defaultValue ={"DEFAULT"} onChange = {props.onChange} name="regions" className="select-search" >
                    <option value="DEFAULT" disabled hidden>Filter By Region</option>
                    {region.map((reg, id) =>
                        <option key={id} value={reg}>{reg}</option>
                    )}
                </select>
            </div>


        </div>
    );
}

export default Searchbar;
