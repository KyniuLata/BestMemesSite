import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementLikes, decrementLikes } from "./store/memes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faList,
} from "@fortawesome/fontawesome-free-solid";
import troll from "../src/assets/images/troll.png";
import "./App.css";

export const MemList = (props) => {
  const dispatch = useDispatch();
  const listItems = props.memes.map((mem, index) => (
    <div key={mem.title} className="mem">
      {mem.title}
      <div>
        <div>
          <img src={mem.img} alt="mem1" width={500} />
        </div>
      </div>
      <div></div>
      <div className="memesScore">
        <div className="vote">
          <div
            className="pointer"
            onClick={() => dispatch(incrementLikes(index))}
          >
            <FontAwesomeIcon icon={faThumbsUp} size="2x" color="green" />
          </div>
          <p className="votesCounter">{mem.likes}</p>
        </div>
        <div className="vote">
          <div
            className="pointer"
            onClick={() => dispatch(decrementLikes(index))}
          >
            <FontAwesomeIcon icon={faThumbsDown} size="2x" color="red" />
          </div>
          <p className="votesCounter">{mem.dislikes}</p>
        </div>
      </div>
    </div>
  ));
  return listItems;
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  return (
    <div className="siteHeader">
      <img
        className="logoHeader"
        src={troll}
        alt="memes site img"
        height={"80vh"}
      />
      <div className="headerText">Longest Memes Page Name Ever </div>
      <div className="menuList">
        <div onClick={toggling}>
          <FontAwesomeIcon icon={faList} size="2x" color="white" />
        </div>
        {isOpen && <div>Not working yet</div>}
      </div>
    </div>
  );
};
