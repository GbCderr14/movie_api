import React from "react";
import {Link} from 'react-router-dom';
import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-3">
          
          <h4>{props.name}</h4>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
        <h6>Street</h6>
          <p>{props.city}</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
        <h6>City</h6>
        <p>{props.state}</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
          <Link style={{padding:"1 rem",fontSize:"0.8rem"}} className='btn' to={ !(props.status==="hide")?`/users/${props.Id}`:`/users`}>
        {props.status==="hide"?"Hide Details":"View Details"}
      </Link>
        </div>
      </div>
      {!(props.status==="hide")?"":<div className="row rowii">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h6>Description</h6>
          <p>{!(props.status==="hide")?"":props.description}</p>
          </div>
      </div>}
      {!(props.status==="hide")?"":<div className="row rowii">
          <div className="col-lg-6 col-md-6 col-sm-6">
          <h6>Email</h6>
          <p>{!(props.status==="hide")?"":props.email}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
          {!(props.status==="hide")?"":<h6>Phone</h6>}
          <p>{!(props.status==="hide")?"":props.phone}</p>
          </div>
      </div>}
      
      {!(props.status==="hide")?"":<div className="row rowii">
          <div className="col-lg-6 col-md-6 col-sm-6">
          <h6>Website</h6>
          <p>{!(props.status==="hide")?"":props.website}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
          {!(props.status==="hide")?"":<h6>Company</h6>}
          <p>{!(props.status==="hide")?"":props.company}</p>
          </div>
      </div>}
       {!(props.status==="hide")?"":<div className="row rowii">

          <div className="col-lg-6 col-md-6 col-sm-6">
         <h6>Username</h6>
          <p>{!(props.status==="hide")?"":props.name}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
          {!(props.status==="hide")?"":<h6>City</h6>}
          {!(props.status==="hide")?"":<p>{props.city}</p>}
          </div>
      </div>}
      <div className="row rowii">
          <div className="col-lg-6 col-md-6 col-sm-6">
          {!(props.status==="hide")?"":<h6>Zipcode</h6>}
          {!(props.status==="hide")?"":<p>{props.zipcode}</p>}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
          {!(props.status==="hide")?"":<h6>Suite</h6>}
         {!(props.status==="hide")?"": <p>{props.suite}</p>}
          </div>
      </div>
    </li>
  );
};

export default Movie;
