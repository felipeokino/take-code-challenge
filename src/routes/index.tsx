import { Route,Routes } from 'react-router-dom';

import NotFound from '../pages/404/NotFound';
import Vehicles from '../pages/Vehicles';

const routes = [
  {
    path: '/vehicles',
    component: Vehicles
  },
  {
    path: '*',
    component: NotFound
  }
];

export default function RoutesComponent() {
  return (
    <Routes>
      {
        routes.map(route => (
          <Route Component={route.component} path={route.path} key={route.path} />
        ))
      }
    </Routes>
  );
}