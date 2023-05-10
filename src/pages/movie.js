import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Movie2 from "../components/individual movie/Movie2";
function Movie(props) {
const {mid} = useParams();
  const movies = props.movies;
  console.log(movies);
  const movie = movies.filter((movie) => movie.id === mid);
  console.log(movie);
  console.log(movie[0].time);
  let name, id;
  let summary,type,language,genre1,runtime,averageRuntime,time,days,weight,externals,network,averageRating,image,premiered;
  
    name = movie[0].name;
    id = movie[0].id;
    summary=movie[0].summary||"Not known";
    type=movie[0].type||"Not known";
    language=movie[0].language||"Not known";
    genre1=movie[0].genre1||"Not known";
    runtime=movie[0].runtime||"Not known";
    premiered=movie[0].premiered;
    averageRating=movie[0].averageRating
    time=movie[0].time||"Not known";
    days=movie[0].days[0]||"Not known";
    weight=movie[0].weight||"Not known";
    externals=movie[0].externals||"Not known";
    network=movie[0].network||"Not known";
    image=movie[0].image||"Not known";
    localStorage.setItem('name', movie[0].name);
    localStorage.setItem('id', movie[0].id);
    localStorage.setItem('image',movie[0].image.medium);
  return (
    <>
      <Movie2 id = { id}
        name = { name}
        type = { type}
        language = { language}
        genre1 = { genre1}
        runtime = { runtime}
        averageRuntime = { averageRuntime}
        premiered={premiered}
        time = { time}
        days = { days}
        averageRating = { averageRating}
        weight = { weight}
        network = { network}
        externals = { externals}
        image = { image}
        summary = { summary}  
        status="hide" />
    </>
  );
}
export default Movie;
