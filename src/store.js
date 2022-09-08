import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
//import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import thunk from "redux-thunk";
import rootReducer from "../src/redux/reducers/index";


//ROOT CONFIG
const persistConfig = {
  key: 'root',
  storage: storage,
  //stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  //whitelist: ['posts'],
  //blacklist: ['page'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export const persistor = persistStore(store);



