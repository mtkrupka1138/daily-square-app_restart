import { lazy, Suspense } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

const Login = lazy(() => import ('./pages/login'));
const SignUp = lazy(() => import ('./pages/sign-up'));
const Dashboard = lazy(() => import ('./pages/dashboard'));
const SingleSquare = lazy(() => import ('./components/square-entry'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          <Route path={ROUTES.SQUARE_SINGLE} component={SingleSquare} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;