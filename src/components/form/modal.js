import { useState,useEffect } from 'react';
import React from 'react';
function Modal(props){
    let image= localStorage.getItem('image');
    let name=localStorage.getItem('name');
    const clickHandler=()=>{
        alert("Tickets successfully booked");
        props.onCancel();
    }
    return (
        <div className="modall row">
             <div className="col-lg-4 col-md-4 col-sm-4" >
                <img src={image} alt="me"/>
                
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8">
                <h4>{name}</h4>
                <div style={{textAlign:"left",paddingTop:"30px",fontWeight:"bold"}}>
                    <div className="form-group" >
                        <label for="name">Name</label>
                        <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label for="number">No. of seats</label>
                        <input type="number" className="form-control" name="number"/>
                    </div>
                    <div className="form-group">
                        <label for="mobilenumber">Mobile Number</label>
                        <input type="number" className="form-control" name="mobilenumber"/>
                    </div>

                   <button onClick={props.onCancel}style={{backgroundColor:"black",marginTop:"30px"}}>Cancel</button>
                   <button onClick={clickHandler} style={{backgroundColor:"red",marginLeft:"20px",marginTop:"30px"}}>Confirm</button>
                </div>
            </div>
            {/*
         */}
        </div>
    ) ;
} 
export default Modal;