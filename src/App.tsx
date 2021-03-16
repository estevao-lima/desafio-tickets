import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'
import LoginPage from './pages/LoginPage.js'
import Home from './pages/Home.js'
import StoreProvider from './components/contexts/Provider.js'
import RoutesPrivate from './routes/private/private.js'


const App: React.FC = () => {
  return (
    <Router>
        <StoreProvider>
          <Switch>
            <Route path="/login" component={LoginPage}/>
            <RoutesPrivate path="/" component={ Home }/>
          </Switch>
        </StoreProvider>
    </Router>
  )
};

export default App;
