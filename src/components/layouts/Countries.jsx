import React, {useState} from "react";
import Country from "./Country";
import Searchbar from "./Searchbar";

const Countries = (props) =>{
    const countries = props.countries;
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");
    const handleChange = (e) => {
        const {value, className} = e.target;

        if (className === "input-search"){
            setSearch(value); 
        }else{
            setFilter(value);
        }
          
    }
    const match = (s) => {
        const p = Array.from(s).reduce((a, v, i) => `${a}[^${s.substr(i)}]*?${v}`, '');
        const re = RegExp(p);
  
        return countries.filter(v => v.name.toLowerCase().match(re));
    }
    const region = (f) => {
        if (f === ""){
            return match(search.toLowerCase());
        }else{
            return match(search.toLowerCase()).filter(v => v.region === f);
        }
        
    }
    const createCard = ((data, id) => (
        <Country
            key = {id}
            onClick = {props.onClick}
            countryFlag = {data.flag}
            countryName = {data.name}
            population = {data.population}
            region = {data.region}
            capital = {data.capital}
        />
    ));

    return (
    
        <div className="main-country-container">
            <Searchbar onChange={handleChange} value={search}/>
            {countries.length > 0 && region(filter).map(createCard)}
        </div>
    );
}

export default Countries;