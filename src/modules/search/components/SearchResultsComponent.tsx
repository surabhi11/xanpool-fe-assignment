import CardView from '../../common/components/cards/CardView';
import CardViewLoader from '../../common/components/cards/CardViewLoader';
import Button from '../../common/components/button/Button';

import useMetadata from '../metadata/useMetadata';
import './SearchResultsComponent.css';

export default function SearchResultsComponent({ ...props }) {
    const {
        results,
        isLoading,
        pageLimit,
        handleCardClick,
        handlePagination
    } = props;

    const { userDetailFeilds } = useMetadata();

    function getCardsView() {
        if (results.length > 0) {
            return results.map((data: any, index: number) => {
                return (
                    <CardView
                        key={index}
                        titleField={'login'}
                        fields={userDetailFeilds}
                        data={data}
                        handleCardClick={handleCardClick} />
                );
            });
        }
    }

    return (
        <div>
            <div className="search-results-wrapper">
                <div className="search-results-display">
                    {isLoading ?
                        <CardViewLoader />
                        :
                        getCardsView()
                    }
                </div>
            </div>
            {(results && results.length > 0) &&
                <div className="buttons-wrapper">
                    {pageLimit > 1 &&
                        <Button label="Previous" type="secondary" onClick={() => handlePagination('prev')} />
                    }
                    {/* since the page results limit is 50 */}
                    {!(results.length < 50) &&
                        <Button label="Next" type="secondary" onClick={() => handlePagination('next')} />
                    }
                </div>
            }
        </div>
    );
}
