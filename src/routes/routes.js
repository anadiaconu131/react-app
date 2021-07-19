import UsersList from '../views/UsersList';
import AddUser from '../views/AddUser';
import UserDetails from '../views/UserDetails';
import ArticlesList from '../views/ArticlesList';

const routes = [
  {
    path: '/',
    component: UsersList,
  },
  {
    path: '/users',
    component: UsersList,
  },
  {
    path: '/users/:id',
    component: UserDetails,
  },
  {
    path: '/new-user',
    component: AddUser,
  },
  {
    path: '/users/:id/articles',
    component: ArticlesList,
  },
];

export default routes;
