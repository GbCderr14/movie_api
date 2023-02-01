import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          
          <h4>{props.title}</h4>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
        <h6>Street</h6>
          <p>{props.releaseDate}</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
        <h6>City</h6>
        <p>{props.openingText}</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <button style={{padding:"1 rem",fontSize:"0.8rem"}}>View Details</button>
        </div>
      </div>
    </li>
  );
};

export default Movie;
