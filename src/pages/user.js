import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
function User(props) {
  const { uid } = useParams();
  const users = props.movies;
  console.log(users);
  const user = users.filter((user) => user.id === uid);
  let city, state, name, id;
  let email,phone,website,company,suite,zipcode,catchPhrase;
  for (const key in user) {
    city = user[key].city;
    state = user[key].state;
    name = user[key].name;
    id = user[key].id;
    email=user[key].email;
    phone=user[key].phone;
    website=user[key].website;
    company=user[key].company;
    suite=user[key].suite;
    zipcode=user[key].zipcode;
    catchPhrase=user[key].catchPhrase;
  }
  console.log(city);
  console.log(state);
  console.log(name);
  console.log(id);

  //  console.log(user);
  return (
    <>
      <Movie city={city} state={state} name={name} Id={id} 
        email={email}
        phone={phone}
        website={website}
        company={company}
        suite={suite}
        zipcode={zipcode}
        description={catchPhrase}
        status="hide" />
    </>
  );
}
export default User;
