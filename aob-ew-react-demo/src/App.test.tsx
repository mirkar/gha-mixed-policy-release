import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
vi.mock('/vite.svg', () => ({ default: 'vite.svg' }));
vi.mock('./assets/react.svg', () => ({ default: 'react.svg' }));
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
  it('renders Vite + React heading', () => {
    render(<App />);
    expect(screen.getByText(/First release testBS/i)).toBeInTheDocument();
  });

  it('renders the count button and increments on click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
});
