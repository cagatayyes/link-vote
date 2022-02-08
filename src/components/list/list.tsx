import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Sorting } from '../../types/sorting';
import { sort, setSelectedSort, setList, ILink } from '../list/listSlice';

import { LinkCard } from '../linkCard/linkCard';
import { Modal } from '../layout/modal/modal';
import { Toast } from '../layout/toast/toast';

import './list.scss';


interface IListProps {
    list: Array<ILink>
}

export function List({ list }: IListProps) {
    const dispatch = useAppDispatch();
    const selectedSort = useAppSelector(state => state.list.selectedSort);

    const onSortApply = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(sort(event.target.value));
        dispatch(setSelectedSort(event.target.value));
    };

    useEffect(() => {
        dispatch(setList());
        dispatch(sort(selectedSort));
    }, []);

    return (
        <div className='list'>
            <Toast />
            <Modal />

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