import React from "react";
function Users(props){

    return <div>
        <section>
    <button onClick={props.fetchMoviesHandler}>Fetch Users Data</button>
  </section><section>
      {props.content}
    </section>
    </div>
}

export default Users;