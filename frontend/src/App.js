import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import ApolloClient from 'apollo-boost';

import Home from './components/Home'
import NoMatch from './components/NoMatch'
import Footer from './components/Footer'
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import './index.css';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
      <Router>
        <div>
          <Nav />
          <div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
