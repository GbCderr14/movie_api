import React from "react";
import Header from "../components/header/header";
function Movies(props){

    return <div>
        <section>
        <Header />
      {props.content}
    </section>
    </div>
}

export default Movies;