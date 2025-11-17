// src/components/layout/DesktopTemplate.jsx

import React from 'react';
import NavbarDesktop from './../components/NavBars/NavBarDes/NavBarDes.jsx'; // Crea este componente para desktop
import LanguageSwitcher from './../components/switcherLenguaje/boton.jsx';
import './../styles/layout.css'




export default function DesktopTemplate({ children }) {
  return (
    <div className="page-container">
       <LanguageSwitcher />
      {/* Navbar para desktop */}
      <div className="hidden md:block w-full">
       
      </div>

      {/* Contenido principal */}
      <main className="container">
        {children}
      </main>
    </div>
  );
}
