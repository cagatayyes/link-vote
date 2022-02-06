import { VoteButton } from "../voteButton/voteButton";
import { ButtonTypes } from "../../types/buttonType";
import { addLink, ILink, removeLink } from '../list/listSlice';

import './linkCard.scss'

interface ILinkCardProps {
    linkItem: ILink;
}


export function LinkCard({ linkItem }: ILinkCardProps) {
    return (
        <div className="linkCard">
            <div className="linkCard-pointsContainer">
                <span className="linkCard-pointsContainer-voteCount">
                    6
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
                    <VoteButton onClick={addLink} type={ButtonTypes.Up} />
                    <VoteButton onClick={removeLink} type={ButtonTypes.Down} />
                </div>
            </div>
        </div>
    )
}