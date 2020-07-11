import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './Redux/store'
import HooksCakeContainer  from './components/HooksCakeConatiner';
import IcecreamContainer from './components/IcecreamContainer';
import CandyContainer from './components/CandyContainer'
import PuddingContainer from './components/PuddingContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IcecreamContainer/>
        <CandyContainer />
        <PuddingContainer/>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
