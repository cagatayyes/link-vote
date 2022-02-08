import { VoteButton } from "../voteButton/voteButton";
import { ButtonTypes } from "../../types/buttonType";
import { ILink, upVote, downVote, setItemToBeRemoved, sort } from '../list/listSlice';
import { changeModalVisibility, showModal } from "../layout/layoutSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import './linkCard.scss'

interface ILinkCardProps {
    linkItem: ILink;
}

export function LinkCard({ linkItem }: ILinkCardProps) {
    const dispatch = useAppDispatch();
    const selectedSort = useAppSelector(state => state.list.selectedSort);

    const onClickUpVote = (id: string) => {
        dispatch(upVote(id));
        dispatch(sort(selectedSort));
    }
    const onClickDownVote = (id: string) => {
        dispatch(downVote(id));
        dispatch(sort(selectedSort));
    }
    const onClickRemove = (id: string) => {
        dispatch(changeModalVisibility(true));
        dispatch(setItemToBeRemoved(id));
        dispatch(showModal({
            modalContentText: 'Do you want to remove:',
            modalContentItem: linkItem.name,
            modalTitle: 'Remove Link',
            showModal: true
        }));
    }

    return (
        <div className="linkCard">
            <div className="linkCard-pointsContainer">
                <span className="linkCard-pointsContainer-voteCount">
                    {linkItem.voteCount}
                </span>
                <span className="linkCard-pointsContainer-text">
                    Votes
                </span>
            </div>

            <div className="linkCard-informationContainer">
                <h4 className="linkCard-informationContainer-title">
                    {linkItem.name}
                </h4>

                <span className="linkCard-informationContainer-url">
                    ({linkItem.url})
                </span>

                <div className='linkCard-buttonsContainer' >
                    <VoteButton onClick={() => onClickUpVote(linkItem.id)} type={ButtonTypes.Up} />
                    <VoteButton onClick={() => onClickDownVote(linkItem.id)} type={ButtonTypes.Down} />
                </div>

            </div>

            <button onClick={() => onClickRemove(linkItem.id)} className='linkCard-removeButton'>
                x
            </button>
        </div>
    )
}