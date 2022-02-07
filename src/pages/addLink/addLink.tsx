import { useState } from 'react';
import { Link } from 'react-router-dom';
import './addLink.scss';
import back from '../../assets/back.png'
import { v1 } from 'uuid';
import { addLink } from '../../components/list/listSlice';
import { useAppDispatch } from '../../app/hooks';

export function AddLink() {
    const dispatch = useAppDispatch(); // direkt useAppDispatch içeride kullanılamıyor. neden?
    const [url, setUrl] = useState<string>('');
    const [name, setName] = useState<string>('');


    const addLinkItem = () => {
        setName('');
        setUrl('');
        dispatch(addLink({ name, url, id: v1(), voteCount: 0, voteChangeDate: new Date().getTime() }));
    }

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
                <input value={name} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }} className='addLink-inputContainer-input' placeholder='e.g. Alphabet' />
            </div>

            <div className='addLink-inputContainer'>
                <span className='addLink-inputContainer-label'>
                    Link URL:
                </span>
                <input value={url} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUrl(event.target.value);
                }} className='addLink-inputContainer-input' placeholder='e.g. http://hepsiburada.com' />
            </div>

            <button onClick={() => { addLinkItem() }} className='addLink-addButton'>
                ADD
            </button>
        </div>
    )
}