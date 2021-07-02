import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './modules/common/components/header/Header';
import SearchPage from './modules/search/pages/SearchPage';
import UserDetailsPage from './modules/user/pages/UserDetailsPage';
import UserRepoDetailsPage from './modules/user/pages/UserRepoDetailsPage';

// common styles
import './assets/css/colors.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/search" exact>
          <SearchPage />
        </Route>

        <Route path="/user/:userName" exact>
          <UserDetailsPage />
        </Route>

        <Route path="/repos/:userName/:repoId" exact>
          <UserRepoDetailsPage />
        </Route>

        <Route path="*">
          <Redirect to="/search" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
