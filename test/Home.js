import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/views/Home';

test('Shows hello world', () => {
    const HELLO_WORLD = 'Bonjour, monde.';
    const { getByRole } = render(<Home />);
    expect(getByRole('heading')).toHaveTextContent(HELLO_WORLD);
});

test('Shows lorem ipsum', () => {
    const LOREM_IPSUM =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    const { getByText } = render(<Home />);
    expect(getByText(LOREM_IPSUM)).toBeInTheDocument();
});

test('Shows emoji', () => {
    const EMOJI_ID = 'emoji';
    const { queryByTestId } = render(<Home />);
    expect(queryByTestId(EMOJI_ID)).toHaveTextContent('😊');
});

test('Button label changes on click', () => {
    const NOT_CLICKED_TEXT = 'click me';
    const CLICKED_TEXT = 'clicked!';
    const { getByText, getByRole } = render(<Home />);
    fireEvent.click(getByText(NOT_CLICKED_TEXT));
    expect(getByRole('button')).toHaveTextContent(CLICKED_TEXT);
});
