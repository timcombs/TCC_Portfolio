import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info';

it('renders w/out crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Info />, div);
  ReactDOM.unmountComponentAtNode(div);
});

