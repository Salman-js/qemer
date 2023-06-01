import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistStore, persistReducer } from 'redux-persist';
import { masterSlice } from './slices/masterSlice.ts';

const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, masterSlice);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
