import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import FooterComponents from '../components/footer/FooterComponents';
import NavbarComponents from '../components/navbar/NavbarComponents';

import HomePage from '../pages/home/HomePage';
import PageNotFound from '../pages/notFoundPage/PageNotFound';
import AboutPage from '../pages/about/AboutPage';
import ContactsPage from '../pages/contacts/ContactsPage';
import AuthPage from '../pages/auth/AuthPage';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavbarComponents />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
      <FooterComponents />
    </BrowserRouter>
  );
};

export default routes;
