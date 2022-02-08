import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { changeModalVisibility, changeToastVisibility } from '../layoutSlice';
import { removeLink } from "../../list/listSlice";
import './modal.scss';

export function Modal() {
    const { showModal, modalTitle, modalContentItem, modalContentText } = useAppSelector(state => state.layout);
    const { itemIDToBeRemoved } = useAppSelector(state => state.list);
    const dispatch = useAppDispatch();

    // modal confirm
    const modalConfirmAction = () => {
        dispatch(changeModalVisibility(false));
        dispatch(removeLink(itemIDToBeRemoved));
        handleToast();
    }


    // show and hide toast message
    const handleToast = () => {
        dispatch(changeToastVisibility(true));

        setTimeout(() => {
            dispatch(changeToastVisibility(false))

        }, 3000);
    }

    const onCloseModal = () => {
        dispatch(changeModalVisibility(false))
    }

    return (
        <div className='modalContainer'>
            {
                showModal &&
                <div className="modal">
                    <div className="modal-titleContainer">
                        <span className="modal-titleContainer-title">
                            {modalTitle}
                        </span>
                        <button onClick={onCloseModal} className="modal-titleContainer-closeButton">
                            x
                        </button>
                    </div>

                    <div className="modal-contentContainer">
                        <span className="modal-contentContainer-text">
                            {modalContentText}
                        </span>

                        <span className="modal-contentContainer-item">
                            {modalContentItem}
                        </span>
                    </div>

                    <div className="modal-buttonsContainer">
                        <button onClick={modalConfirmAction} className="modal-buttonsContainer-confirmButton">
                            OK
                        </button>

                        <button onClick={onCloseModal} className="modal-buttonsContainer-cancelButton">
                            CANCEL
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}
