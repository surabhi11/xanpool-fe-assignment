import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
    const clickFn = jest.fn();
    it('renders correctly', () => {
        render(<Button label="Test Button" onClick={clickFn} />);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent('Test Button');
    });

    it('click event', () => {
        render(<Button label="Test Button" onClick={clickFn} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(clickFn).toHaveBeenCalledTimes(1);
    });
});
