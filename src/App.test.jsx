import { render } from '@testing-library/react';
import App from './App'

test('render without crashing', () => {
    const { getByText } = render(<App />)
    const title = getByText(/Last search/i)
    expect(title).toBeInTheDocument()
});