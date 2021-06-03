import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RFAppState } from '@stores';

interface CommonState {
  isMobile: boolean;
}

const initialState: CommonState = {
  isMobile: true
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setViewPort(state, action: PayloadAction<number>) {
      const windowWidth = action.payload;
      state.isMobile = windowWidth <= 768;
    }
  }
});

export const commonReducer = commonSlice.reducer;

export const commonActions = commonSlice.actions;

export const { caseReducers } = commonSlice;

// Selectors
export const selectIsMobile = (state: RFAppState) => state.common.isMobile;
