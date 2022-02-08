import './pagination.scss';

interface IPaginationProps {
    linksPerPage: number;
    totalLinks: number;
    paginate: (number: number) => void;
}


export function Pagination({ linksPerPage, totalLinks, paginate }: IPaginationProps) {
    const pageNumbers = [];

    // calculate page numbers to show
    for (let i = 1; i <= Math.ceil(totalLinks / linksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='pagination'>
            {pageNumbers.map(number => (
                <button onClick={() => { paginate(number) }} key={number} className='pagination-pageItem'>
                    {number}
                </button>
            ))}
        </nav>
    );
}