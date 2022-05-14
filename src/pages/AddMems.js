import * as React from "react";
import { Link } from "react-router-dom";

export default function Hottest() {
  return (
    <>
      <main>
        <h2>Add your own memes</h2>
        <p>Forms below bababababalala </p>
      </main>
      <nav>
        <Link to="/hottest">Go Back to hottest</Link>
      </nav>
    </>
  );
}
