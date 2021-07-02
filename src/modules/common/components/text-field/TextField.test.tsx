import { render, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
    it("renders with empty props", () => {
        const { getByTestId } = render(
            <TextField text='test input' />
        );

        const input = getByTestId('text-field') as HTMLInputElement;
        expect(input.value).toBe('test input');
    });

    it("renders with custom placeholders", () => {
        const { getByTestId } = render(
            <TextField
                placeholder="Enter search text"
                text='test input'
            />
        );

        const input = getByTestId('text-field') as HTMLInputElement;
        expect(input.value).toBe('test input');

        expect(input.placeholder).toBe('Enter search text');
    });

    it("renders and calls event handler", () => {
        const _handleChange = jest.fn();

        const { getByTestId } = render(
            <TextField
                placeholder="Enter search text"
                onChange={_handleChange}
            />
        );

        const input = getByTestId('text-field');
        fireEvent.change(input, { target: { value: 'testing' } });

        expect(_handleChange).toHaveBeenCalledTimes(1);
    });
});
