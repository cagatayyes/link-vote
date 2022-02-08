import { useAppSelector } from '../../../app/hooks';
import './toast.scss';

export function Toast() {
    const removedLink = useAppSelector(state => state.layout.modalContentItem);
    const showToast = useAppSelector(state => state.layout.showToast);

    return (
        <div className='toastContainer'>
            {
                showToast &&
                <div className='toast'>
                    <b> {removedLink} </b> &nbsp; REMOVED
                </div>
            }
        </div>
    )
}