import { useState } from 'react';
import { Link } from 'react-router-dom';
import plus from '../../assets/plus.png'

import './list.scss';


export function List() {
    return (
        <div className='list'>
            MY LIST


            <div className='list-submitLink'>
                <Link to='/addLink'>
                    <img className='list-submitLink-plus' alt='+' src={plus} />
                    <span className='list-submitLink-text'>
                        SUBMIT A LINK
                    </span>
                </Link>
            </div>


        </div>
    )
}