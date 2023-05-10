import React from 'react';
import Movie from '../individual movie/Movie2';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
        id = {movie.id}
        name = {movie.name}
        url = {movie.url}
        type = {movie.type}
        language = {movie.language}
        genre1 = {movie.genre1}
        status = {movie.status}
        runtime = {movie.runtime}
        averageRuntime = {movie.averageRuntime}
        premiered = {movie.premiered}
        ended = {movie.ended}
        officialSite = {movie.officialSite}
        schedule={movie.schedule}
        time = {movie.time}
        days = {movie.days}
        rating = {movie.rating}
        averageRating = {movie.rating.average}
        weight = {movie.weight}
        network = {movie.network}
        externals = {movie.externals}
        image = {movie.image}
        summary = {movie.summary}
        updated = {movie.updated}
        links = {movie._links}
       
        />
      ))}
    </ul>
  );
};

export default MovieList;
