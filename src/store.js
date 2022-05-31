import { configureStore } from "@reduxjs/toolkit";
import memesSlice from "../src/store/memes";

export default configureStore({
  reducer: {
    memesStore: memesSlice,
  },
});
