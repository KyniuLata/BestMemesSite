import "../App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [memes, setMemes] = useState([
    {
      title: "Mem 1",
      likes: 6,
      dislikes: 0,
      img: "path/to/image1.png",
    },
    {
      title: "Mem 2",
      likes: 6,
      dislikes: 0,
      img: "path/to/image1.png",
    },
    {
      title: "Mem 3",
      likes: 6,
      dislikes: 0,
      img: "path/to/image1.png",
    },
    {
      title: "Mem 4",
      likes: 6,
      dislikes: 0,
      img: "path/to/image1.png",
    },
    {
      title: "Mem 5",
      likes: 6,
      dislikes: 0,
      img: "path/to/image1.png",
    },
  ]);

  useEffect(() => {
    console.log("memy : ", memes);
  }, []);

  const likesHandler = (index, operation) => {
    let newMemeArr = [...memes];
    newMemeArr[index][operation] = memes[index][operation] + 1;

    setMemes(newMemeArr);
  };

  const MemList = () => {
    const listItems = memes.map((mem, index) => (
      <div>
        {mem.title}
        <div>
          likes {mem.likes} dislikes {mem.dislikes}
        </div>
        <div>Total score {mem.likes - mem.dislikes}</div>
        <div>
          <button onClick={() => likesHandler(index, "likes")}>+1</button>
          <button onClick={() => likesHandler(index, "dislikes")}>-1</button>
        </div>
      </div>
    ));
    return listItems;
  };

  return (
    <>
      <MemList />
      <nav>
        <Link to="/hottest">check the hottest memes here</Link>
        <Link to="/addMemes">add your own memes here</Link>
      </nav>
    </>
  );
}

export default Home;
