import { useState } from 'react';
import { Link } from 'react-router-dom';
import './addLink.scss';
import back from '../../assets/back.png'



export function AddLink() {
    return (
        <div className='addLink'>
            <Link to='/' className='addLink-returnLink'>
                <img className='addLink-returnLink-goBackIcon' src={back} alt='<-' /> Return to List
            </Link>

            <span className='addLink-title'>
                Add New Link
            </span>

            <div className='addLink-inputContainer'>
                <span className='addLink-inputContainer-label'>
                    Link Name:
                </span>
                <input className='addLink-inputContainer-input' placeholder='e.g. Alphabet' />
            </div>

            <div className='addLink-inputContainer'>
                <span className='addLink-inputContainer-label'>
                    Link URL:
                </span>
                <input className='addLink-inputContainer-input' placeholder='e.g. http://hepsiburada.com' />
            </div>

            <button className='addLink-addButton'>
                ADD
            </button>
        </div>
    )
}