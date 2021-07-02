import { useState } from 'react';
import { withRouter } from "react-router";

import usePrevious from '../../../utils/hooks/usePrevious';
import SearchInputComponent from '../components/SearchInputComponent';
import SearchResultsComponent from '../components/SearchResultsComponent';

import { getAllUsers } from '../../../api/UsersApi';

// results per page
const LIMIT = 50;

function SearchPage({ ...props }) {
    const {
        history,
    } = props;

    const [searchText, setSearchText] = useState<string>('');
    const [users, setUsers] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const [pageNumber, setPageNumber] = useState<number>(1);

    const prevPageNumber: number = usePrevious<number>(pageNumber);

    function fetchUsers(text: string, pageNumber: number = 1, pageLimit: number) {
        getAllUsers(text, pageNumber, pageLimit)
            .then((results) => {
                setIsLoading(false);
                if (results && results.items) {
                    setUsers(results.items);
                }

                if (results instanceof Error) {
                    setErrorMsg(results.message);
                }
            })
            .catch(error => {
                setErrorMsg(error);
            });
    }

    function _handleChange(value: string) {
        setSearchText(value);
    }

    function _handleSearhQuery(text: string, pageNo: number = pageNumber) {
        setIsLoading(true);
        setSearchText(text);
        fetchUsers(text, pageNo, LIMIT);
    }

    function _handleCardClick(data: any) {
        history.push(`/user/${data.login}`);
    }

    function resetSearch() {
        setSearchText('');
        setUsers([]);
    }

    function _handlePagination(type: string) {
        switch (type) {
            case 'next':
                const nextLimit = prevPageNumber + 1;
                _handleSearhQuery(searchText, nextLimit);
                setPageNumber(nextLimit);
                break;
            case 'prev':
                const prevLimit = prevPageNumber > 1 ? prevPageNumber - 1 : 1;
                _handleSearhQuery(searchText, prevLimit);
                setPageNumber(prevLimit);
                break;
            default:
                return;
        }
    }

    return (
        <div className="page-wrapper">
            <SearchInputComponent
                searchText={searchText}
                onChange={_handleChange}
                handleSearchQuery={_handleSearhQuery}
                resetSearch={resetSearch} />

            <SearchResultsComponent
                results={users}
                isLoading={isLoading}
                pageLimit={pageNumber}
                handleCardClick={_handleCardClick}
                handlePagination={_handlePagination} />

            {errorMsg && <span className="error-message">{errorMsg}</span>}
        </div>
    );
}

export default withRouter(SearchPage);
