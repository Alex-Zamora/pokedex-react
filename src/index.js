import React from 'react';
import { render } from 'react-dom';
import Home from './pages/smart/home';
import './index.sass';

const Hello = ({name}) => {
  return <h1 className="color">{name}</h1>;
};

render(<Home />, document.getElementById('app'));