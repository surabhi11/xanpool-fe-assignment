import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import CardView from '../../common/components/cards/CardView';
import CardViewLoader from '../../common/components/cards/CardViewLoader';
import { getUserRepos } from '../../../api/UsersApi';
import useMetadata from '../metadata/useMetadata';

import './UserDetailsPage.css';

function UserDetailsPage({ ...props }) {
    const {
        match,
        history
    } = props;

    const { userName } = match.params;
    const [userRepos, setUserRepos] = useState<Array<any>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);

    const { userRepoDetailFeilds } = useMetadata();

    useEffect(() => {
        if (userName) {
            getUserDetails(userName);
        }
    }, [userName]);

    function getUserDetails(userName: string) {
        setIsLoading(true);
        getUserRepos(userName)
            .then((data) => {
                setUserRepos(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log('Error!', error);
                setErrorMsg(error);
            })
    }

    function _handleCardClick(data: any) {
        history.push(`/repos/${userName}/${data.name}`);
    }

    function getCardsView() {
        if (userRepos.length > 0) {
            return userRepos.map((userRepo: any, index: number) => {
                return (
                    <CardView
                        key={index}
                        titleField={'name'}
                        fields={userRepoDetailFeilds}
                        data={userRepo}
                        handleCardClick={_handleCardClick} />
                )
            });
        } else {
            return (<span className="error-message">No results found.</span>);
        }
    }

    return (
        <div className="page-wrapper">
            <div className="user-details-header">
                <h2>{'List of Repositories'}</h2>
                <h2>{`User - ${userName}`}</h2>
            </div>

            <div className="user-details-page-wrapper">
                {isLoading ?
                    <CardViewLoader />
                    : getCardsView()
                }
            </div>

            {errorMsg && <span className="error-message">{errorMsg}</span>}
        </div>
    );
}

export default withRouter(UserDetailsPage);
