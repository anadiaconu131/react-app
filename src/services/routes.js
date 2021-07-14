import Home from '../views/Home';
import Users from '../views/Users';
import UpdateUser from '../views/UpdateUser';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/users',
    component: Users,
  },
  {
    path: '/user-update',
    component: UpdateUser,
  },
  // {
  //     path: "/users",
  //     component: Users,
  //     routes: [
  //         {
  //             path: "/users/1",
  //             component: UserDetails
  //         },
  //     ]
  // }
];

export default routes;
