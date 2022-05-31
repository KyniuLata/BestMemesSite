import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MemList } from "../utils";

function Home() {
  const memesArr = useSelector((state) => state.memesStore.memes);
  const [memes, setMemes] = useState(memesArr);

  useEffect(() => {
    setMemes(memesArr);
  }, [memesArr]);

  return (
    <>
      <nav>
        <Link to="/hottest">check the hottest memes here</Link>
        {/* <Link to="/addMemes">add your own memes here</Link> */}
      </nav>
      <MemList memes={memes} />
    </>
  );
}

export default Home;
