import { useDispatch } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import rootReducer from './reducers/index';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware();

    return middleware;
  },
  devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'development' || process.env.NEXT_PUBLIC_NODE_ENV === 'local'
});

export type RFAppState = ReturnType<typeof rootReducer>;
export type RFAppDispatch = typeof store.dispatch;
export type RFAppThunk<ReturnType = void> = ThunkAction<ReturnType, RFAppState, unknown, Action<string>>;

export const useAppDispatch = () => useDispatch<RFAppDispatch>();

export { store };
