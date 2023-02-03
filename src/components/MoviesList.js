import React from 'react';
import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          Id={movie.id}
          name={movie.name}
          city={movie.city}
          state={movie.state}
          description={movie.catchPhrase}
          email={movie.email}
          phone={movie.phone}
          website={movie.website}
          compaany={movie.company}
          suite={movie.suite}
          zipcode={movie.zipcode}

        />
      ))}
    </ul>
  );
};

export default MovieList;
