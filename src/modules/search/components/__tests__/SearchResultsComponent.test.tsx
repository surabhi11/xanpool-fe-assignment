import { render } from "@testing-library/react";
import SearchResultsComponent from '../SearchResultsComponent';

describe("<SearchResultsComponent/>", () => {
    it("renders with loading props correctly", () => {
        const { container } = render(
            <SearchResultsComponent
                results={[]}
                isLoading={true}
                pageLimit={1}
                handleCardClick={jest.fn()}
                handlePagination={jest.fn()}
            />
        );

        let loaderElem = container.querySelector('.card-view-wrapper__loading') as HTMLElement;
        expect(loaderElem).toBeInTheDocument()
    });

    it("renders with data props correctly", () => {
        const { container } = render(
            <SearchResultsComponent
                results={[{
                    'id': 1,
                    'userId': 'testUser1',
                    'fullName': 'Test User1'
                },
                {
                    'id': 2,
                    'userId': 'testUser2',
                    'fullName': 'Test User2'
                }]}
                isLoading={false}
                pageLimit={1}
                handleCardClick={jest.fn()}
                handlePagination={jest.fn()}
            />
        );

        let loaderElem = container.querySelector('.search-results-display') as HTMLElement;
        expect(container.querySelectorAll('.card-view-wrapper').length).toBe(2);
        expect(loaderElem).toBeInTheDocument()
    });
});