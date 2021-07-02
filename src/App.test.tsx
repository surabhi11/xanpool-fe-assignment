import { render } from '@testing-library/react';
import App from './App';

describe('render app', () => {
  it('check for search bar for users', () => {
    const { getByTestId } = render(<App />);

    const input = getByTestId('text-field') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.placeholder).toBe('Search users ...');
  });
});
