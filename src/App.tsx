import React, { useContext } from 'react';
import './App.css';
import InitiatorBoard from './components/InitiatorBoard';
import Login from './pages/Auth/Login';
import AuthContextProvider, { AuthContext } from './contexts/AuthContext';
import InitiatorLogin from './pages/InitiatorRequest';
import CustomerRequestForm from './pages/CustomerRequestForm';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './layout/dashboard/DashboardLayout';
import { RequireAuth } from './auth/RequireAuth';
import { UseAuth } from './hooks/UseAuth';
import { RequestHistory } from './pages/request-history/RequestHistory';

function App() {

  console.log("Hello");
  const  auths  = UseAuth();
  console.log({auths});

  const { setUserInfo, userInfo, token, setToken, setAuth, auth } = useContext(AuthContext);

  console.log({auth});
  


  return (
    <>
      <Routes>
        {/* <Login/>
            <InitiatorBoard/>
            <InitiatorLogin/>
            <CustomerRequestForm/> */}
            

        <Route path="account/login" element={<Login/>}/>
        <Route path="a" element={<InitiatorLogin/>}/>
        <Route element={<RequireAuth/>}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route
              path=""
              element={<Navigate to="/dashboard/new-request" replace />}
            />
            <Route path="new-request" element={<CustomerRequestForm />} />
            <Route path="request-history" element={<RequestHistory/>}/>

          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
