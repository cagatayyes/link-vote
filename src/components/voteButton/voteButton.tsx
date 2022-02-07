import { ButtonTypes } from '../../types/buttonType';
import downArrow from '../../assets/down-arrow.png';
import './voteButton.scss';

interface IVoteButtonProps {
    type: ButtonTypes;
    onClick: () => void;
}

export function VoteButton({ type, onClick }: IVoteButtonProps) {
    return (
        <button className="voteButton" onClick={onClick}>
            <img className={`voteButton-icon voteButton-icon--${type}`} alt="" src={downArrow} />

            <span className="voteButton-text">
                {type} Vote
            </span>
        </button>
    )
}