import { render, within, fireEvent } from '@testing-library/react';
import CardView from './CardView';

const mockData = {
    'id': 1,
    'userId': 'testUser1',
    'fullName': 'Test User1'
};

describe('CardView', () => {
    const clickFn = jest.fn();
    it("renders correctly", () => {
        const { getByTestId } = render(
            <CardView
                titleField={'id'}
                fields={[
                    {
                        key: 'userId',
                        label: 'User Id',
                        type: 'text'
                    },
                    {
                        key: 'fullName',
                        label: 'Full Name',
                        type: 'text'
                    }
                ]}
                data={mockData}
                handleCardClick={clickFn} />
        );

        const { getByText } = within(getByTestId('card-view'))
        const headerText = getByText(/testUser1/i);
        expect(headerText).toBeInTheDocument();
    });

    it('click event', () => {
        const { getByTestId } = render(
            <CardView
                titleField={'id'}
                fields={['userName', 'displayName']}
                data={mockData}
                handleCardClick={clickFn} />
        );

        const cardDiv = getByTestId('card-view');
        fireEvent.click(cardDiv);
        expect(clickFn).toHaveBeenCalledTimes(1);
    });
});