import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import BookmarkItem from './BookmarkItem';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<BrowserRouter><BookmarkItem /></BrowserRouter>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders without crashing - react-testing-library', () => {
  render(
    <BrowserRouter>
      <BookmarkItem />
    </BrowserRouter>
  );
});
