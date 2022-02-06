import { ButtonTypes } from '../../types/buttonType';
import downArrow from '../../assets/down-arrow.png';
import './voteButton.scss';

interface IVoteButtonProps {
    type: ButtonTypes;
    onClick: Function;
}

export function VoteButton({ type }: IVoteButtonProps) {
    return (
        <button className="voteButton">
            <img className={`voteButton-icon voteButton-icon--${type}`} alt="" src={downArrow} />

            <span className="voteButton-text">
                {type} Vote
            </span>
        </button>
    )
}