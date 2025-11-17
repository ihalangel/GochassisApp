// src/components/layout/DesktopTemplate.jsx

import React from 'react';
import NavbarDesktop from './../components/NavBars/NavBarDes/NavBarDes.jsx'; // Crea este componente para desktop
// import BackgroundImage from './../BackgroundImage.jsx';
import './../styles/layout.css'
import LanguageSwitcher from './../components/switcherLenguaje/boton.jsx';


// export default function DesktopTemplate({ children }) {
//   return (
//       <div className="relative  min-h-screen w-screen">
//         {/*<div className="relative   mx-auto px-8 py-6">*/}



//       {/* Fondo */}
//       {/* <BackgroundImage /> */}

//       {/* Navbar para desktop, visible solo en pantallas medianas hacia arriba */}
//       <div className="hidden md:block">
//         <NavbarDesktop />
//       </div>

//       {/* Contenido principal */}
//       <main className="relative z-10 max-w-6xl mx-auto p-8">
//         {children}
//       </main>
//     </div>
//   );
// }


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
