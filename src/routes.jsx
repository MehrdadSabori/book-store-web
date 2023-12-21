import React from 'react';
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Articles from './pages/Articles/Articles';
import AboutUs from './pages/AboutUs/AboutUs';
import BookDetails from './pages/bookDetails/BookDetails';
import Registration from './pages/registration/Registration';
import LogIn from './pages/login/LogIn';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/store', element: <Store /> },
  { path: '/store/:categoryName', element: <Store /> },
  { path: '/book-details/:id', element: <BookDetails /> },
  { path: '/articles', element: <Articles /> },
  { path: '/about-us', element: <AboutUs /> },
  { path: '/registration', element: <Registration />},
  { path: '/login', element: <LogIn />},
];

export  {routes};


