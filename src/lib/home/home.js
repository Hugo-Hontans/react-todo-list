import React from "react";
import "./home.css";

export function Home(props) {
  return (
    <article>
      <h1 className="title-home">HOME</h1>
      <p>
        You can create a new todo list by clicking on the
        <br />
        add button after filling the appropriate field.
      </p>
      <p>You can navigate to the todo list you want by clicking on its name.</p>
    </article>
  );
}
