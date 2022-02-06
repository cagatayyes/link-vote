import { useState } from 'react';
import { Link } from 'react-router-dom';
import './submitLink.scss';
import plus from '../../assets/plus.png'

export function SubmitLink() {
    return (
        <div className='submitLink'>
            <Link className='submitLink-linkContainer' to='/addLink'>
                <div className='submitLink-plusContainer'>
                    <img className='submitLink-plusContainer-plus' alt='+' src={plus} />
                </div>

                <span className='submitLink-text'>
                    SUBMIT A LINK
                </span>
            </Link>
        </div>
    )
}