import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MemList } from "../utils";

export default function Hottest() {
  const [hotMemes, setHotMemes] = useState([]);
  const memesArr = useSelector((state) => state.memesStore.memes);

  useEffect(() => {
    setHotMemes([]);
    const checkIsHot = () => {
      let hotMemeArr = [];
      for (let i = 0; i < memesArr.length; i++) {
        if (memesArr[i].likes - memesArr[i].dislikes >= 5) {
          hotMemeArr.push(memesArr[i]);
          setHotMemes(hotMemeArr);
        }
      }
    };
    checkIsHot();
  }, [memesArr]);

  return (
    <>
      <main>
        <h2>Hottest Memes </h2>
        <p>That the place with hottest memes in last few days !@!@!@</p>
      </main>
      <nav>
        <Link to="/">Go Back to home page</Link>
      </nav>

      <div>
        {hotMemes.length > 0 ? (
          <MemList memes={hotMemes} />
        ) : (
          <p>There's no hot memes here :(</p>
        )}
      </div>
    </>
  );
}
