import React, { lazy, Suspense } from 'react';
import Styles from './App.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';

const CompleteList = lazy(() => import('../../routes/complete-list/CompleteList'));
const UsersList = lazy(() => import('../../routes/users-list/UsersList'));

const App = () => {
  return (
    <Router>
      <div className={Styles.App_container}>
        <nav className={Styles.App_nav}>
          <ul>
            <li>
              <Link className={Styles.App_link} to="/home/complete-list">
                Home
              </Link>
            </li>
            <li>
              <Link className={Styles.App_link} to="/users-list/">
                Users List
              </Link>
            </li>
          </ul>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={Styles.App_view}>
            <Switch>
              <Route path="/" exact component={CompleteList} />
              <Route path="/home/" component={CompleteList} />
              <Route path="/users-list/" component={UsersList} />
            </Switch>
          </div>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
