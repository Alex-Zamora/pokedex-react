import React from 'react';
import './home-layout.sass';

function HomeLayout(props) {
  return <section className="home-layout">{props.children}</section>
}

export default HomeLayout;