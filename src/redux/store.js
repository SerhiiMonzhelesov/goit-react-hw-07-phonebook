import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phonebookSlice';

const store = configureStore({
  reducer: contactsReducer,
});

export default store;
