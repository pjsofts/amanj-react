import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";

import { RootState } from "./store";
import { setSearch } from "./gameSlice";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(setSearch),
  effect: (action, listenerApi) =>
    localStorage.setItem(
      "game",
      JSON.stringify((listenerApi.getState() as RootState).game)
    ),
});
