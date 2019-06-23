import React from "react";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import CreateLink from './Link/CreateLink'
import LinkList from './Link/LinkList';
import SearchLinks from './Link/SearchLinks';
import Login from './Auth/Login';
import ForgotPassword from './Auth/ForgotPassword';
import LinkDetail from './Link/LinkDetail';
import Header from './Header';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="route-container">
          <Switch>
            <Route exact path='/' render={()=> <Redirect to='/new/1'/>} component={CreateLink} />
            <Route path='/create' component={CreateLink} />
            <Route path='/login' component={Login} />
            <Route path='/forgot' component={ForgotPassword} />
            <Route path='/top' component={LinkList} />
            <Route path='/search' component={SearchLinks} />
            <Route path='/new/:page' component={LinkList} />
            <Route path='/link/:linkId' component={LinkDetail} />
          </Switch>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
