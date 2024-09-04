import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigations/Navigation';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="w-full max-w-[390px] desktop:max-w-[1200px] mx-auto">
      <Navigation></Navigation>
      <main className=" min-h-[800px]">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}
