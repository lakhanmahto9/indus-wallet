import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "../slice/darkModeSlice";
import authSlice from "../slice/authSlice";
import inventoryProductSlice from "../slice/addInventoryProductSlice";
import inventoryCategorySlice from "../slice/addCategorySlice";
import inventoryColorSlice from "../slice/addColorSlice";
import inventorySizeSlice from "../slice/addSizeSlice";
import inventoryQuantitySlice from "../slice/addQuantityslice";
import inventoryBillingSlice from "../slice/createBillingSlice";
import inventoryCustomerSlice from "../slice/addCustomerSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedDarkModeReducer = persistReducer(persistConfig, darkModeReducer);
const persistAuth = persistReducer(
  { ...persistConfig, key: "auth" },
  authSlice
);
const persistProduct = persistReducer(
  { ...persistConfig, key: "product" },
  inventoryProductSlice
);

const persistAddCategory = persistReducer(
  { ...persistConfig, key: "category" },
  inventoryCategorySlice
);

const persistAddColor = persistReducer(
  { ...persistConfig, key: "color" },
  inventoryColorSlice
);

const persistAddSize = persistReducer(
  { ...persistConfig, key: "size" },
  inventorySizeSlice
);
const persistAddQuantity = persistReducer(
  { ...persistConfig, key: "quantity" },
  inventoryQuantitySlice
);

const persistCreateBilling = persistReducer(
  { ...persistConfig, key: "billing" },
  inventoryBillingSlice
);

const persistCustomer = persistReducer(
  { ...persistConfig, key: "customer" },
  inventoryCustomerSlice
);

const store = configureStore({
  reducer: {
    darkmode: persistedDarkModeReducer,
    auth: persistAuth,
    product: persistProduct,
    category: persistAddCategory,
    color: persistAddColor,
    size: persistAddSize,
    quantity: persistAddQuantity,
    billing: persistCreateBilling,
    customer: persistCustomer,
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
