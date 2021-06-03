import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from '@stores/slices/common';

const rootReducer = combineReducers({
  common: commonReducer
});

export default rootReducer;
