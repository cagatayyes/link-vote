import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sorting } from '../../types/sorting';
import { saveListToStorage, getListFromStorage } from '../../helpers/localStorage';
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
	itemIDToBeRemoved: string;
}

const initialState: IInitialState = {
	list: [],
	selectedSort: Sorting.DESC,
	itemIDToBeRemoved: ''
};

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		setList: (state) => {
			const stateFromStorage = getListFromStorage();

			if (stateFromStorage !== null) {
				state.list = stateFromStorage;
			}
		},
		addLink: (state, action: PayloadAction<ILink>) => {
			let stateFromStorage = getListFromStorage();

			if (stateFromStorage !== null && stateFromStorage.length > 0) {
				stateFromStorage.unshift(action.payload);
				state.list = stateFromStorage;
			} else {
				state.list.unshift(action.payload);
			}

			saveListToStorage(state.list);
		},
		removeLink: (state, action: PayloadAction<string>) => {
			let newState: IInitialState = {
				list: state.list.filter(list => list.id !== action.payload),
				selectedSort: state.selectedSort,
				itemIDToBeRemoved: ''
			}

			saveListToStorage(newState.list);

			return newState;
		},
		setItemToBeRemoved: (state, action: PayloadAction<string>) => {
			state.itemIDToBeRemoved = action.payload;
		},
		upVote: (state, action: PayloadAction<string>) => {
			const votedLink = state.list.filter(link => link.id === action.payload);

			votedLink[0].voteCount += 1;

			saveListToStorage(state.list);
		},
		downVote: (state, action: PayloadAction<string>) => {
			const votedLink = state.list.filter(link => link.id === action.payload);

			votedLink[0].voteCount -= 1;

			saveListToStorage(state.list);
		},
		sort: (state, action: PayloadAction<string>) => {
			// appling sort filter to list
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
			// storing selected sort
			state.selectedSort = action.payload;
		}
	}
});

export const { addLink, removeLink, upVote, downVote, sort, setSelectedSort, setItemToBeRemoved, setList } = listSlice.actions;
export default listSlice.reducer;
