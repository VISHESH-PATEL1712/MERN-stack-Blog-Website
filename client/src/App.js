import { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

//components
import Login from './components/Accounts/Login';
import Home from './components/home/Home';
import Header from './components/header/Header';


const PrivateRoute = ({ isAuthenticated, ...props }) => {
 
   return isAuthenticated ? 
    <>
      <Outlet />
    </>
    : <Navigate replace to='/login' />

}

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);


  return (
    
      <DataProvider>
        <BrowserRouter>
         <Header />
          <div style={{ marginTop: 100}}>
            <Routes>
                <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated } />} />

                <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                <Route path='/' element={<Home />} />
                </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    
  );
}

export default App;
