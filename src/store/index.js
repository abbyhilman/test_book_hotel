import rootReducers from './reducers/rootReducers';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducers,
});

export default store;
