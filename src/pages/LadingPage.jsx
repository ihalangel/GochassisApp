
import React from "react";
import  MainLayout  from "../layouts/mainLayout.jsx";

import LandingContent from "./landingpage/LandingContent.jsx";
import { Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext.jsx";


export default function LandingPage() {
  const { user } = useAuthContext();

  return (
    <MainLayout>
      {!user ? (
        <>
          <LandingContent />
          {/* <LoginFlow /> */}
        </>
      ) : (
        <Outlet /> // Mostrar rutas hijas solo si usuario está autenticado
      )}
    </MainLayout>
  );
}
