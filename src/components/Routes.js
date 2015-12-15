import App from './Main';
import List from './List';

const routeConfig = [
  {
    path: '/',
    component: App,
    indexRoute: {},
    childRoutes: [
      {
        path: 'list',
        component: List
      }
    ]
  }
];

export default routeConfig;
