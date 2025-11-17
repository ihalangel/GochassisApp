import React from 'react';
// import AppLogo from './../../components/AppLogo.jsx';
import { useIsMobile } from "./../../hooks/useIsMobile.jsx";
import styles from "./../../styles/layout/landingpage.module.css";
import LoginForm from './../../components/loginform/loginForm.jsx';
// Icono SVG de un documento.
const DocumentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-emerald-500 mx-auto mb-4 transition-all duration-300 hover:brightness-125"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export default function LandingContent() {
  const isMobile = useIsMobile();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>

        <h1 className={styles.title}>
          {isMobile ? "M" : "D"}
        </h1>
      <LoginForm />
        {isMobile }
      </div>
    </div>
  );
}


// export default function LandingContent() {
//   const isMobile = useIsMobile();

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>
//           {isMobile ? "Container and Yard" : "Container Yard Tor Management Systema..."}
//         </h1>
//         <p className={styles.description}>
//           {isMobile ? "Control..." : "Gestión..."}
//         </p>
//         {isMobile && <DocumentIcon className={styles.icon} />}
//        <LoginForm />
//       </div>
//     </div>
//   );
// }


