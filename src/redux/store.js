import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import nanniesReducer from './nannies/slice';
import { filterReducer } from './filter/filtersSlice.js';

const persistAuthConfig = {
  key: 'nannies',
  storage,
  whitelist: ['favoriteItem'],
};

const persistednanniesReducer = persistReducer(
  persistAuthConfig,
  nanniesReducer
);

export const store = configureStore({
  reducer: {
    nannies: persistednanniesReducer,
    filters: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
