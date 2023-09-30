import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import drawersReducer from "../slices/drawers";

const persistConfig = {
  key: "root",
  storage,
};

// const persistedcartAndLoyaltyReducer = persistReducer(
//   persistConfig,
//   cartAndLoyaltyReducer
// );

export const store = configureStore({
  reducer: {
    // config: persistedConfig,

    drawersSlice: drawersReducer,
  },
  middleware: [thunk],
});

export const waitForStatePersistence = () => {
  return new Promise<void>((resolve) => {
    persistStore(store, null, () => {
      resolve();
    });
  });
};

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
