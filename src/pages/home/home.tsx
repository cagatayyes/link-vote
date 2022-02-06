import { List } from "../../components/list/list";
import { SubmitLink } from "../../components/submitLink/submitLink";
import './home.scss';

export function Home() {
    return (
        <div className='home'>
            <SubmitLink />

            <div className='home-seperator' />

            <List />
        </div>
    );

}