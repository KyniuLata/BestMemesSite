import { createSlice } from "@reduxjs/toolkit";
import mem1 from "../assets/images/mem1.png";
import mem2 from "../assets/images/mem2.jpeg";
import mem3 from "../assets/images/mem3.png";
import mem4 from "../assets/images/mem4.jpeg";
const initialState = {
  memes: [
    {
      key: 0,
      title: "Mem 1",
      likes: 0,
      dislikes: 0,
      img: mem1,
    },
    {
      key: 1,
      title: "Mem 2",
      likes: 0,
      dislikes: 0,
      img: mem2,
    },
    {
      key: 2,
      title: "Mem 3",
      likes: 0,
      dislikes: 0,
      img: mem3,
    },
    {
      key: 3,
      title: "Mem 4",
      likes: 0,
      dislikes: 0,
      img: mem4,
    },
  ],
};
export const memesSlice = createSlice({
  name: "memesArr",
  initialState,
  reducers: {
    addMemes: (state, action) => {
      return {
        state: [action.payload, ...state],
      };
    },
    incrementLikes: (state, action) => {
      const index = state.memes.findIndex((mem) => mem.key === action.payload);
      const newArray = [...state.memes];
      newArray[index].likes += 1;
      state.memes = newArray;

      return state;
    },
    decrementLikes: (state, action) => {
      const index = state.memes.findIndex((mem) => mem.key === action.payload);
      const newArray = [...state.memes];
      newArray[index].dislikes += 1;
      state.memes = newArray;

      return state;
    },
  },
});

export const { incrementLikes, decrementLikes } = memesSlice.actions;

export default memesSlice.reducer;
