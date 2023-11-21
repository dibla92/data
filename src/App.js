import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import React from 'react';
import './ui/scss/_main.scss'
import './ui/scss/bootstrap/bootstrap-grid.min.css'

//import MaintenancePage from './pages/MaintenancePage'
// import { history } from './redux/store'
import MySite from './pages/MySite'
import routes from './routes'

function App() {
  const isLogged = true;

  return (
    <div className="App">
      <BrowserRouter>
        {isLogged ? (
          <Switch>
            <Route path={routes.mySite.path} component={MySite} />
            {/* <Route path={routes.maintenance.path} component={MaintenancePage} /> */}
            <Redirect to={routes.mySite.path} />
          </Switch>
        ) : (
          <div>wewqwweqeqw </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
