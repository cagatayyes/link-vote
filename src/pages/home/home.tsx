import { useState } from 'react';
import { List } from "../../components/list/list";
import { Pagination } from '../../components/pagination/pagination';
import { SubmitLink } from "../../components/submitLink/submitLink";
import { useAppSelector } from '../../app/hooks';
import './home.scss';

export function Home() {
    // get list from redux store
    const list = useAppSelector(state => state.list.list);

    //pagination
    const linksPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastLink = currentPage * linksPerPage;
    const indexOfFirstLink = indexOfLastLink - linksPerPage;
    const currentLinks = list.slice(indexOfFirstLink, indexOfLastLink);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className='home'>
            <SubmitLink />

            <div className='home-seperator' />

            <List list={currentLinks} />

            <Pagination
                paginate={paginate}
                linksPerPage={linksPerPage}
                totalLinks={list.length}
            />
        </div>
    );

}