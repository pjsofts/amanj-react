import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import { listenerMiddleware } from "./listener";

const gameState = JSON.parse(localStorage.getItem("game") || "null");

export const store = configureStore({
  preloadedState: {
    game: gameState === null ? { search: "", name: "pouria" } : gameState
  },
  reducer: {
    game: gameSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(listenerMiddleware.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
