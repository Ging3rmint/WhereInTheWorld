import React from "react";
import {Link} from "react-router-dom"
const Backbutton = () => {

    return(
        <div className="btn-container">
            <Link className="btn-custom" to="/"><i className="fas fa-arrow-left"></i> Back</Link>
        </div>
    );
}

export default Backbutton