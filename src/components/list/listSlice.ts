import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILink {
	id: string;
	name: string;
	url: string;
}

const initialState: Array<ILink> = [];

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		addLink: (state, action: PayloadAction<ILink>) => {
			console.log("add clicked", state, action.payload);

			state.push(action.payload)
		},
		removeLink: (state, action: PayloadAction<string>) => {
			console.log("remove clicked", state, action.payload);

			return state.filter(list => list.id !== action.payload);
		},
		upVote: (state, action: PayloadAction<ILink>) => {
			console.log("upVote clicked", action.payload);


			state.push(action.payload)
		},
		downVote: (state, action: PayloadAction<string>) => {
			console.log("remove clicked", action.payload);

			return state.filter(list => list.id !== action.payload);
		}
	}
});

export const { addLink, removeLink } = listSlice.actions;
export default listSlice.reducer;
