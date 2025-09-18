import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders main heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Interactive Circle of Fifths/i);
  expect(headingElement).toBeInTheDocument();
});

test('toggles between original and enhanced UI', () => {
  render(<App />);
  
  // Initially, the original UI is shown
  expect(screen.getByText(/A tool for guitar players/i)).toBeInTheDocument();

  // Click the toggle button
  const toggleButton = screen.getByText(/Show Enhanced UI/i);
  fireEvent.click(toggleButton);

  // Now, the enhanced UI should be shown
  // We can check for an element that is unique to the enhanced UI
  // For now, let's just check that the original UI's subtitle is gone.
  expect(screen.queryByText(/A tool for guitar players/i)).not.toBeInTheDocument();

  // Click the toggle button again
  fireEvent.click(toggleButton);

  // The original UI should be back
  expect(screen.getByText(/A tool for guitar players/i)).toBeInTheDocument();
});
