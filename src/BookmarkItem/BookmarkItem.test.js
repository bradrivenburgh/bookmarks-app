import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import BookmarkItem from './BookmarkItem';

const bookmark = {
  id: 1,
  title: 'title',
  url: 'https://www.url.com',
  description: 'description',
  rating: 3,
}
const { id, title, url, description, rating} = bookmark;

test('renders without crashing - react-testing-library', () => {
  render(
    <BrowserRouter>
      <BookmarkItem 
        id={id}
        title={title}
        url={url}
        description={description}
        rating={rating}
      />
    </BrowserRouter>
  );
});
