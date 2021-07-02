import { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from "react-markdown";

import { getUserRepoDetails, getUserRepoReadMe } from '../../../api/ReposApi';

import './UserRepoDetailsPage.css';

type DefaultRepoResponse = {
    /**
     * repo details api format
     */
    sha: string;
    url: string;
    tree: Array<any>;
};

function UserRepoDetailsPage({ ...props }) {
    const {
        match,
    } = props;

    const { userName, repoId } = match.params;

    const [repoDetails, setRepoDetails] = useState<DefaultRepoResponse | undefined>(undefined);
    const [readMeContent, setReadMeContent] = useState<string>('');

    useEffect(() => {
        if (userName && repoId) {
            getRepoDetails(userName, repoId);
            getRepoReadMe(userName, repoId);
        }
    }, [userName, repoId]);

    function getRepoDetails(userName: string, repoId: string) {
        getUserRepoDetails(userName, repoId)
            .then((data) => {
                setRepoDetails(data);
            })
            .catch(error => {
                console.log('Error!', error);
            });
    }

    function getRepoReadMe(userName: string, repoId: string) {
        getUserRepoReadMe(userName, repoId)
            .then((data) => {
                if (data && data.content) {
                    // decode base64 ReadMe content
                    const decodedContent = atob(data.content);
                    setReadMeContent(decodedContent);
                }
            })
            .catch(error => {
                console.log('Error!', error);
            });
    }

    return (
        <div className="page-wrapper">
            <div className="user-repo-details-header">
                <h2>{`User - ${userName}`}</h2>
                <h2>{`Repository - ${repoId}`}</h2>
            </div>

            <div className="user-repo-details-page-wrapper">
                <h2>{'Files'}</h2>
                <ul className="user-repo-details-page-content">
                    {repoDetails && repoDetails.tree &&
                        repoDetails.tree.map((item: any, index: number) => {
                            return (
                                <li key={index}>
                                    {item.path}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {
                readMeContent &&
                <div className="user-repo-details-page-wrapper">
                    <h2>{'README.md'}</h2>
                    <div className="user-repo-details-page-content">
                        <ReactMarkdown children={readMeContent} />
                    </div>
                </div>
            }
        </div >
    );
}

export default withRouter(UserRepoDetailsPage);
