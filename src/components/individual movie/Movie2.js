import React from "react";
import {Link} from 'react-router-dom';
import classes from "./Movie.module.css";
import Modal from '../form/modal';
import Back from '../form/backdrop';
import { useState } from "react";

const Movie = (props) => {
  const[modalIsOpen,setModalIsOpen]=useState(false);
  const openHandler=()=>{
    setModalIsOpen(true);
  }
  const closeModalHandler=()=>{
    setModalIsOpen(false);
  }
  return (
    <>
    {modalIsOpen ? <Modal onCancel={closeModalHandler}/>:null}
      {modalIsOpen ? <Back onClick={closeModalHandler}/>:null}
    <li className={classes.movie}>
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12">
          
          <img src={props.image.medium} alt="image"/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" style={{marginTop:"10px"}}>
        <h5>Name</h5>
          <p>{props.name}</p>
          <h5>Rating</h5>
        <p>{props.averageRating}</p>
          <h5>Language</h5>
          <p>{props.language}</p>
          {!(props.status==="hide")?"":<><h5>Weight</h5>
        <p>{props.weight}</p></>}
        {!(props.status==="hide")?"":<><h5>Premiered on</h5>
        <p>{props.premiered}</p></>}
         </div>
        <div className="col-lg-4 col-md-6 col-sm-6" style={{marginTop:"10px"}}>
        <h5>Type</h5>
        <p>{props.type}</p>
        <h5>Schedule:</h5>
          <p>At {props.time} on {props.days}</p>
          {!(props.status==="hide")?"":<><h5>Genre</h5>
        <p>{props.genre1}</p></>}
        {!(props.status==="hide")?"":<><h5>Runtime</h5>
        <p>{props.runtime} minutes</p></>}
        </div>
        
      {!(props.status==="hide")?"":<div className="row rowii">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h5>Summary</h5>
          <div dangerouslySetInnerHTML={{ __html: props.summary }}></div>
          </div>
      </div>}
    <div style={{display:"flex",justifyContent:"center"}}>
    <div style={{flex:"2"}}>
          <Link style={{padding:"1 rem",fontSize:"0.8rem"}} className='btn' to={ !(props.status==="hide")?`/movies/${props.id}`:`/movies`}>
        {props.status==="hide"?"Hide Details":"View Details"}
      </Link>
        </div>
       {!(props.status==="hide")?"": <div style={{flex:"2"}}>
          <div style={{padding:"1 rem",fontSize:"0.8rem",backgroundColor:"#2f06e8"}} className='btn btn2' onClick={openHandler} >
        Book your tickets!!
      </div>
      
        </div>}
        </div>
      </div>
    </li>
    </>
  );
};

export default Movie;
