import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import AddBookmark from './AddBookmark';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddBookmark />
    </BrowserRouter>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
