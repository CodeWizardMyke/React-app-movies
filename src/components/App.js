import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      	<div id="wrapper">
          <Routes>
            <Route  path='/' element={ [ <SideBar/>, <ContentWrapper/> ] }>
            </Route>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
