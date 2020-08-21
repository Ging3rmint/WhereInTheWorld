import React from "react";

const Navbar = (props) => {
    return (
        <nav className= {!props.mode? "navbar dark-mode": "navbar light-mode"}>
            <h1 className="title-large">Where in the world?</h1>
            <button className="btn-toggle" onClick={props.onClick}><i className={props.mode? "far fa-moon": "fas fa-moon"}></i> Dark Mode</button>
            {/* <a  href="!#" className="btn-toggle" onClick={props.onClick}><i className="far fa-moon"></i> Dark Mode</a> */}
        </nav>
    );
}

export default Navbar;

