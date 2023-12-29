import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Preloader } from './Components/Layout';
import { Home, HomeWithLoader, Thankyou } from './Components/Pages';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={HomeWithLoader}></Route>
        <Route path="/thankyou" Component={Thankyou}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
