import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, applyMiddleware());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
