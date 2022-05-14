import * as React from "react";
import { Link } from "react-router-dom";

export default function Hottest() {
  return (
    <>
      <main>
        <h2>Hottest Memes </h2>
        <p>That the place with hottest memes in last few days !@!@!@</p>
      </main>
      <nav>
        <Link to="/">Go Back to home page</Link>
      </nav>
    </>
  );
}
