import React,{Fragment} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";


import Navbar from "./components/layouts/Navbar";
import Countries from "./components/layouts/Countries";
import Footer from "./components/layouts/Footer";

import CountryAPI from "./components/modules/CountryAPI";
import ToggleMode from "./components/modules/ToggleMode";

import Detail from "./components/pages/Detail";

import './App.css';





const App = () => {
  const [mode, toggle] = ToggleMode();
  const countries = CountryAPI();

  const country = ({ match }) => {
    if (countries === undefined || countries.length < 1){
      return <Redirect to="/" />
    }else{
      const countryName = match.params.detail;
      const countryData = countries.filter(data => data.name === countryName)
      const borders = countryData[0].borders; //select country borders array
      console.log(borders);
      const borderCountries = countries.filter(c => {
          return borders.includes(c.alpha3Code);
      })

      return <Detail countryData= {countryData} countryBorders= {borderCountries}/>
    }

  }
    
  
  return (
    <Router>
        <Fragment>
          <Navbar onClick={toggle} mode={mode}/>
          <section className={!mode? "main-container dark-mode" : "main-container light-mode"}>

            <Route exact path ="/" render={(props) =>(
              <Countries {...props} countries = {countries} />
            )}/>
              
            <Switch>
              <Route path="/:detail" render={country}/>
            </Switch>
            
            <Footer />
          </section>

        </Fragment>  
    </Router>

  );
}

export default App;
            /* /* <Route path="/:detail" component={Account}/> */ 
// render={(props) => (
//   <Detail {...props} country={country} />
// )}