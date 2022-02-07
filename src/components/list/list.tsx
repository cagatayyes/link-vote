import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { Sorting } from '../../types/sorting';
import { sort, setSelectedSort } from '../list/listSlice';

import { LinkCard } from '../linkCard/linkCard';

import './list.scss';


export function List() {
    const dispatch = useAppDispatch();
    const list = useAppSelector(state => state.list.list);

    const onSortApply = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(sort(event.target.value));
        dispatch(setSelectedSort(event.target.value));
    }

    return (
        <div className='list'>
            <select onChange={onSortApply} className="list-sortSelectBox">
                <option value='' disabled >Order by</option>
                <option value={Sorting.DESC}>Most Voted (Z → A)</option>
                <option value={Sorting.ASC}>Less Voted (A → Z)</option>
            </select>

            {
                list.length < 1 &&
                <div className='list-emptyList'>
                    NO LIST ITEMS <br />
                    Add some
                </div>
            }

            {
                list.length > 0 &&
                list.map(linkItem =>
                    <LinkCard linkItem={linkItem} key={linkItem.id} />
                )
            }
        </div>
    )
}