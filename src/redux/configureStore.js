import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cityReducer from './cityReducer';

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  cities: cityReducer,
});

// Configure the store with the root reducer and middleware
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

// Export the configured store as the default export of this module
export default store;
