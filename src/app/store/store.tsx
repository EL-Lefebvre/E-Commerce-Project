import { configureStore, Action, ThunkAction, Reducer } from "@reduxjs/toolkit";
import { createBrowserHistory, History } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

import itemsSliceReducer from "../../features/home/ItemsSlice";

// import { omdbAPI } from '../../features/movies/moviesAPI';

export const history: History = createBrowserHistory();

let store;

export const getStore = () => {
  store = configureStore({
    reducer: {
      router: connectRouter(history) as Reducer,
      items: itemsSliceReducer,
    },
    preloadedState: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        routerMiddleware(history),
        // omdbAPI.middleware,
      ]),
  });
  return store;
};

// @ts-ignore
export type AppDispatch = typeof store.dispatch;
// @ts-ignore
export type RootState = ReturnType<typeof store.getState>;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
