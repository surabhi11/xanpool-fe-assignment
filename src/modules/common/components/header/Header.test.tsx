import { render, within, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Header />);

        const { getByText } = within(getByTestId('page-header'));
        const headerText = getByText(/Frontend assignment/i);
        expect(headerText).toBeInTheDocument();
    });
});
