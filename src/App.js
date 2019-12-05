import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import UsersList from './UsersList/UsersList';
import NewUser from './NewUser/NewUser';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <Redirect to="/users" />
        )} />
        <Route path={"/users"} component={UsersList} />
        <Route path={"/new"} component={NewUser} />
      </div>
    );
  }
}

export default App;
