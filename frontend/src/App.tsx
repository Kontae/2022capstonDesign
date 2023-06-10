import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './js/Main/Main.page';
import { Header } from './js/Header/Header';
import { Body } from './js/Body/Body';
import { Kind } from './js/Kind/Kind.page';
import { Category } from './js/Category/Category.page';
import { Ingredient } from './js/Ingredient/Ingredient.page';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/kind' element={<Kind />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/ingredient' element={<Ingredient />}></Route>
        </Routes>
      </Body>
    </BrowserRouter>
  );
}

export default App;
