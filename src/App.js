import React from "react";
import ReactPaginate from 'react-paginate';
import { useState,useEffect,useCallback } from "react";
import {Routes,Route,Link,Navigate} from "react-router-dom";
import MoviesList2 from "./components/movie-list/MoviesList2";
import Movies from "./pages/Movies";
import Movie from "./pages/movie";
import "./App.css";
function App() {
  const [movies2, setMovies2] = useState([]);
  const [isLoading2, setIsLoading2] = useState(false);
  const [error,setError] = useState(null);
  const fetchMoviesHandler2=useCallback(async function () {
    setIsLoading2(true);
    try {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      const loadedMovies2=[];
      for(const key in data){
        loadedMovies2.push({
          id:key,
          name : data[key].show.name,
          url : data[key].show.url,
          type : data[key].show.type,
          language : data[key].show.language,
          genre1: data[key].show.genres[0],
          status : data[key].show.status,
          runtime : data[key].show.runtime||"Not known",
          averageRuntime : data[key].show.averageRuntime||"Not known",
          premiered : data[key].show.premiered||"Not known",
          ended : data[key].show.ended||"Not known",
          officialSite : data[key].show.officialSite||"Not known",
          time : data[key].show.schedule.time||"Not known",
          days : data[key].show.schedule.days||"Not known",
          rating : data[key].show.rating||"Not known",
          averageRating : data[key].show.rating.average||"Not known",
          weight : data[key].show.weight,
          network : data[key].show.network||"Not known",
          externals : data[key].show.externals||"Not known",
          image : data[key].show.image||"Not known",
          summary : data[key].show.summary||"Not known",
          updated : data[key].show.updated||"Not known",
          links : data[key].show._links||"Not known"

        })
      }
      setMovies2(loadedMovies2);
    } catch(error) {
      alert("Something went wrong");
      setError(error.message);
    } finally {
      setIsLoading2(false);
    }
  },[]);
 
  useEffect(()=>{
    fetchMoviesHandler2();
  },[fetchMoviesHandler2])
  let content=<p>"Found no movies"</p>;
  
  function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(movies2.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(movies2.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % movies2.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
    return (
      <>
        <MoviesList2 movies={currentItems} />
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="...."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  if (movies2.length > 0) {
    content = <PaginatedItems itemsPerPage={3} />;
    console.log(movies2);
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading2) {
    content = <p>Loading...</p>;
  }


  return <>
  <Routes>
    <Route path="/movies" element={<Movies content={content}/>}/>
    <Route path="/movies/:mid" element={<Movie movies={movies2}/>}/>
    <Route path="/" element={<Navigate replace to="/movies" />} />
    </Routes></>
}

export default App;

