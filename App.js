// PropertyUpdatePage.js

import React, { useState } from 'react';

import LandingPage from './landingPage';
import { Route, Routes } from 'react-router-dom';
import UserAccount from './UserAccountFeatures';
import CreateUser from './createUser';
import ViewAccount from './viewAccount';
import SearchAccount from './searchAccount';
import UpdateAccount from './updateAccount';
import SuspendAccount from './suspendAccount';
import AgentReview from './agentReview';


const App = () => {

  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/userAccount' element={<UserAccount/>}  />
        <Route path='/createUser' element={<CreateUser/>}  />
        <Route path='/viewAccount' element={<ViewAccount/>}  />
        <Route path='/searchAccount' element={<SearchAccount/>}  />
        <Route path='/updateAccount' element={<UpdateAccount/>}  />
        <Route path='/suspendAccount' element={<SuspendAccount/>}  />
        <Route path='/agentReview' element={<AgentReview/>}  />
      </Routes>
    </div>
  );
}

export default App;



