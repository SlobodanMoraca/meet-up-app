import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetup';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetupsPage />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
