import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CommentSection from './CommentSection';

function reducer(
  state = {
    auth: {
      userName: null,
      userId: null,
      isSignedIn: false,
    },
    comment: {
      comment: '',
      commentList: [],
    },
  },
  action
) {
  switch (action.type) {
    case `ADD_COMMENT`:
      return { ...state, comment: action.payload };

    case `COMMENTS_LIST`:
      return { ...state, commentList: action.payload };
  }
}


function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

describe('CommentSection', () => {
  test('renders App component', () => {
    renderWithRedux(<CommentSection />);
  });
});
