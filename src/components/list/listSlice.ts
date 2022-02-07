import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sorting } from '../../types/sorting';
export interface ILink {
	id: string;
	name: string;
	url: string;
	voteCount: number;
	voteChangeDate: number;
}

interface IInitialState {
	list: Array<ILink>;
	selectedSort: string;
}

const initialState: IInitialState = {
	list: [],
	selectedSort: Sorting.DESC
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		addLink: (state, action: PayloadAction<ILink>) => {
			state.list.unshift(action.payload)
		},
		removeLink: (state, action: PayloadAction<string>) => {
			let newState: IInitialState = {
				list: state.list.filter(list => list.id !== action.payload),
				selectedSort: state.selectedSort
			}

			return newState;
		},
		upVote: (state, action: PayloadAction<string>) => {
			const votedLink = state.list.filter(link => link.id === action.payload);

			votedLink[0].voteCount += 1;
		},
		downVote: (state, action: PayloadAction<string>) => {
			const votedLink = state.list.filter(link => link.id === action.payload);

			votedLink[0].voteCount -= 1;
		},
		sort: (state, action: PayloadAction<string>) => {
			console.log("sort applied", action.payload);
			let sortedArray: Array<ILink> = [];

			if (action.payload === Sorting.DESC) {
				sortedArray = state.list.sort((a, b) => {
					if (a.voteCount === b.voteCount) {
						return b.voteChangeDate - a.voteChangeDate;
					}

					return b.voteCount - a.voteCount;
				});
			}

			if (action.payload === Sorting.ASC) {
				sortedArray = state.list.sort((a, b) => {
					if (a.voteCount === b.voteCount) {
						return b.voteChangeDate - a.voteChangeDate;
					}

					return a.voteCount - b.voteCount;
				});
			}

			state.list = sortedArray;
		},
		setSelectedSort: (state, action: PayloadAction<string>) => {
			state.selectedSort = action.payload;
		}
	}
});

export const { addLink, removeLink, upVote, downVote, sort, setSelectedSort } = listSlice.actions;
export default listSlice.reducer;
