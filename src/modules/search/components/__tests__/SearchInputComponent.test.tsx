import { render, screen } from "@testing-library/react";
import SearchInputComponent from '../SearchInputComponent';

describe("<SearchInputComponent/>", () => {
    it("render with props correctly", () => {
        const { container, getByText } = render(
            <SearchInputComponent
                searchText={'test input'}
                onChange={jest.fn()}
                handleSearchQuery={jest.fn()}
                resetSearch={jest.fn()}
            />
        );

        const input = screen.getByTestId('text-field') as HTMLInputElement;

        expect(input.placeholder).toBe('Search users ...');
        expect(container.querySelector('.search-input-wrapper')).toBeInTheDocument();

        const button = getByText('Reset');
        expect(button).toBeInTheDocument();
    });
});