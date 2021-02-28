import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Home } from "./pages/Home";
import { CreateSong } from "./pages/CreateSong/CreateSong";
import { Navbar } from "./Components/Navbar/Navbar";
import { Alert } from "./Components/Alert/Alert";
import { AlertState } from "./Context/alert/AlertState";

function App() {
  return (
    <AlertState>
      <BrowserRouter>
        <Navbar />
        <div className="Container">
          <Alert />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/create-song' component={CreateSong}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AlertState>
  );
}

export default App;
