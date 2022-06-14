import { useState, useEffect } from 'react';
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


    const [coinData, setCoinData] = useState({} as any);

    useEffect(() => {

        const apiURL = 'https://api2.binance.com/api/v3/ticker/24hr';

        fetch(apiURL)
            .then(response => response.json())
            .then(data => setCoinData(data.slice(0, 5))
            )
    }, [])

    return (
        <div className='home'>


            <h1>
                Coin Prices
            </h1>

            <table>
                <tr>
                    <th>
                        Symbol
                    </th>
                    <th>
                        Ask Price
                    </th>
                    <th>
                        Volume
                    </th>
                    <th>
                        Count
                    </th>
                </tr>

                {
                    coinData !== undefined && coinData.length > 0 &&
                    coinData.map((coin: any) => (
                        <tr key={coin.symbol}>
                            <td>
                                {coin.symbol}
                            </td>
                            <td>
                                {Math.floor(coin.askPrice) }
                            </td>
                            <td>
                                {Math.floor(coin.volume)}
                            </td>
                            <td>
                                {coin.count}
                            </td>
                        </tr>
                    )
            )}

            </table>


            {/*  <SubmitLink />

            <div className='home-seperator' />

            <List list={currentLinks} />

            <Pagination
                paginate={paginate}
                linksPerPage={linksPerPage}
                totalLinks={list.length}
            /> */}
        </div>
    );

}