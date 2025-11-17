import React from "react";
import MobileTemplate from "./MobileTemplate.jsx";
import DesktopTemplate from "./DestopTemplate.jsx";
import { useIsMobile } from "./../hooks/useIsMobile.jsx";

export default function MainLayout({ children }) {
  const isMobile = useIsMobile();

  return isMobile ? (
    <MobileTemplate>{children}</MobileTemplate>
  ) : (
    <DesktopTemplate>{children}</DesktopTemplate>
  );
}