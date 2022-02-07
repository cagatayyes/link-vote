import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    showModal: boolean;
    showToast: boolean;
}

const initialState: IInitialState = {
    showModal: false,
    showToast: false
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        changeModalVisibility: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload;
        },
        changeToastVisibility: (state, action: PayloadAction<boolean>) => {
            state.showToast = action.payload;
        }
    }
});

export const { changeModalVisibility, changeToastVisibility } = layoutSlice.actions;
export default layoutSlice.reducer;
