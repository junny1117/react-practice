import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Contents from './components/Contents';
import BookReview from './components/BookReview';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Menu />
      <Contents />
      <BookReview />
      <Image />
    </div>
  );
}

export default App;
