import React from "react";
import ReactPaginate from 'react-paginate';
import { useState,useEffect,useCallback } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error,setError] = useState(null);
  const fetchMoviesHandler=useCallback(async function () {
    setIsLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMovies=[];
      for(const key in data){
        loadedMovies.push({
          id:key,
          name:data[key].username,
          city:data[key].address.city,
          state:data[key].address.street
        })
      }
      setMovies(loadedMovies);
    } catch(error) {
      alert("Something went wrong");
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  },[]);
  useEffect(()=>{
    fetchMoviesHandler();
  },[fetchMoviesHandler])
  let content=<p>"Found no users"</p>;
  
  function PaginatedItems({ itemsPerPage }) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(movies.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(movies.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
    
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % movies.length;
      console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
      setItemOffset(newOffset);
    };
    return (
      <>
        {/* <Items currentItems={currentItems} /> */}
        <MoviesList movies={currentItems} />
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          // pageLinkClassName="page-link"
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
          // style={{textAlign:"center"}}
        />
      </>
    );
  }
  if (movies.length > 0) {
    content = <PaginatedItems itemsPerPage={2} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Users Data</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
