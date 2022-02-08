import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface IInitialState {
    showModal: boolean;
    modalTitle: string;
    modalContentText: string;
    modalContentItem: string;
    showToast: boolean;
}


interface IModal {
    showModal: boolean;
    modalTitle: string;
    modalContentText: string;
    modalContentItem: string;
}

const initialState: IInitialState = {
    showModal: false,
    modalTitle: '',
    modalContentText: '',
    modalContentItem: '',
    showToast: false,
};

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        changeModalVisibility: (state, action: PayloadAction<boolean>) => {
            state.showModal = action.payload;
        },
        showModal: (state, action: PayloadAction<IModal>) => {
            state.modalTitle = action.payload.modalTitle;
            state.modalContentText = action.payload.modalContentText;
            state.modalContentItem = action.payload.modalContentItem;
            state.showModal = true;
        },
        confirmModal: (_state, action: PayloadAction<() => void>) => {
            action.payload();
        },
        changeToastVisibility: (state, action: PayloadAction<boolean>) => {
            state.showToast = action.payload;
        }
    }
});

export const { changeModalVisibility, changeToastVisibility, showModal, confirmModal } = layoutSlice.actions;
export default layoutSlice.reducer;
