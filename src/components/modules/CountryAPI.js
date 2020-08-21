import {useState, useEffect} from "react";
import axios from "axios";

export default CountryAPI => {
    const [countries, setCountries] = useState("");


    useEffect(()=>{
        async function getData() {
            const response = await axios.get("https://restcountries.eu/rest/v2/all");
            setCountries(response.data);
            console.log("Requested data from: https://restcountries.eu/rest/v2/all");
        }
        getData();
    },[]);
    
    return countries;
}
