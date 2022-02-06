import React, { useState } from 'react';
import { v1 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


import { LinkCard } from '../linkCard/linkCard';

import './list.scss';


export function List() {
    const dispatch = useAppDispatch(); // direkt useAppDispatch içeride kullanılamıyor. neden?
    const list = useAppSelector(state => state.list);

    return (
        <div className='list'>
            <select className="list-sortSelectBox">
                <option value='' disabled >Order by</option>
                <option >Most Voted (Z → A)</option>
                <option >Less Voted (A → Z)</option>
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