import { configureStore } from "@reduxjs/toolkit";

import requestsReducer from "./slice/requestsSlice";

const loadState = () => {
  try {
    const saved = localStorage.getItem("appState")
    return saved ? JSON.parse(saved) : undefined
  } catch {
    return undefined
  }
}

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => {
  localStorage.setItem(
    "appState",
    JSON.stringify(store.getState())
  )
})
