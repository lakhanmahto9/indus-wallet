import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "../slice/darkModeSlice";
import passwordSlice from "../slice/passwordSlice";
import rpcUrlSlice from "../slice/rpcurlSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedDarkModeReducer = persistReducer(persistConfig, darkModeReducer);
const persistPasscode = persistReducer(
  { ...persistConfig, key: "password" },
  passwordSlice
);


const store = configureStore({
  reducer: {
    darkmode: persistedDarkModeReducer,
    password: persistPasscode,
    rpcurl: rpcUrlSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
