import React from 'react';
// import AppLogo from './../AppLogo.jsx';
import { useAuthContext } from './../../../contexts/AuthContext.jsx';

import styles from './../../../styles/components/NavBar.module.css';

export default function NavbarDesktop() {
  const { user, logout } = useAuthContext();

  const renderLinksByRole = () => {
    if (!user || !user.rol) {
      return (
        <>
          <li><a className={styles.navLink} href="/login">Iniciar sesión</a></li>
          <li><a className={styles.navLink} href="/about">Acerca de</a></li>
        </>
      );
    }
    if (user.rol === 'driver') {
      return (
        <>
          <li><a className={styles.navLink} href="/driver">Dashboard</a></li>
          <li><a className={styles.navLink} href="/driver/containers">Contenedores</a></li>
          <li><a className={styles.navLink} href="/driver/yards">Yardas</a></li>
          <li><a className={styles.navLink} href="/driver/reports">Reportes</a></li>
          <li><a className={styles.navLink} href="/driver/contact">Contacto</a></li>
        </>
      );
    }
    return null;
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {/* <AppLogo /> */}

        <ul className={styles.navLinks}>
          {renderLinksByRole()}
        </ul>

        <div>
          {!user ? (
            <button className={styles.authButton}>
              Iniciar sesión
            </button>
          ) : (
            <button
              onClick={logout}
              aria-label="Cerrar sesión"
              className={styles.authButton}
            >
              Cerrar sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
