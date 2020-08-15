import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext';
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import './BookmarkList.css'
import PropTypes from 'prop-types';

class BookmarkList extends Component {
  static defaultProps = {
    bookmarks: []
  };

  static contextType = BookmarksContext;

  render() {
    const { bookmarks } = this.context
    return (
      <section className='BookmarkList'>
        <h2>Your bookmarks</h2>
        <ul className='BookmarkList__list' aria-live='polite'>
          {bookmarks.map(bookmark =>
            <BookmarkItem
              key={bookmark.id}
              {...bookmark}
            />
          )}
        </ul>
      </section>
    );
  }
}

export default BookmarkList;

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: (props, propName, componentName) => {
      // get the value of the prop
      const prop = props[propName];
  
      // do the isRequired check
      if(!prop) {
        return new Error(`${propName} is required in ${componentName}. Validation Failed`);
      }
  
      // check the type
      if (typeof prop != 'string') {
        return new Error(`Invalid prop, ${propName} is expected to be a string in ${componentName}. ${typeof prop} found.`);
      }
  
      // do the custom check here
      // using a simple regex
      if (prop.length < 5 || !prop.match(new RegExp(/^https?:\/\//))) {
        return new Error(`Invalid prop, ${propName} must be min length 5 and begin http(s)://. Validation Failed.`);
      }
    },
    rating: PropTypes.number,
    description: PropTypes.string
  }))
};