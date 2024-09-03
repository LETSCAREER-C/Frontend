import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigations/Navigation';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="w-full min-w-[390px]">
      <Navigation></Navigation>
      <main className=" min-h-[800px]">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
