"use client";

import { useMemo, useCallback } from "react";
import { useCartSync } from "@/hooks/useCartSync";
import useGlobalStore from "@/store/useGlobalStore";
import HamMenuSlide from "./hamMenuSlide";
import { MobileNavbar } from "./components/MobileNavbar";
import { NavbarBrand } from "./components/NavbarBrand";
import { NavigationLinks } from "./components/NavigationLinks";
import { NavbarActions } from "./components/NavbarActions";
import { useNavbarData, type CategoryNode, type MenuItem } from "./hooks/useNavbarData";
import { useNavbarState } from "./hooks/useNavbarState";
import { navbarStyles } from "./styles/navbarStyles";

interface NavBarProps {
  initialIsLoggedIn?: boolean;
  initialCategories?: CategoryNode[];
  initialMenuItems?: MenuItem[];
}

export const NavBar = ({
  initialIsLoggedIn = false,
  initialCategories = [],
  initialMenuItems = [],
}: NavBarProps) => {
  // Custom hooks for state and data management
  // Pass server-provided data to skip client-side loading state
  const { categories, menuItems } = useNavbarData({
    initialCategories,
    initialMenuItems,
  });
  const {
    isAccountOpen,
    setIsAccountOpen,
    isLoggingOut,
    setIsLoggingOut,
    isHamMenuOpen,
    setIsHamMenuOpen,
    isEnableSearch,
    isActive,
    toggleAccount,
    toggleHamMenu,
    toggleSearch
  } = useNavbarState();

  // Global state
  const logout = useGlobalStore((s) => s.logout);
  const isLoggedIn = useGlobalStore((s) => s.isLoggedIn);
  const totalItems = useGlobalStore((s) => s.totalItems);
  const { syncingCart } = useCartSync();

  // Memoized brand configuration
  const brandConfig = useMemo(() => {
    const TENANT_NAME = process.env.NEXT_PUBLIC_TENANT_NAME || "default";
    const brandName = TENANT_NAME || "Next.js Theme System";
    const logo = process.env.NEXT_PUBLIC_LOGO_URL || "https://webshopmanager.com/files/images/logo.png";
    return { brandName, logo };
  }, []);

  // Memoized logout handler
  const handleLogout = useCallback(async () => {
    if (isLoggingOut) return;
    try {
      setIsLoggingOut(true);
      setIsAccountOpen(false);
      await logout();
    } catch {
      // Hard redirect fallback
      window.location.href = "/";
    } finally {
      setIsLoggingOut(false);
    }
  }, [isLoggingOut, logout, setIsAccountOpen, setIsLoggingOut]);

  return (
    <>
      <MobileNavbar 
        {...brandConfig}
        isEnableSearch={isEnableSearch}
        toggleSearch={toggleSearch}
        isHamMenuOpen={isHamMenuOpen}
        toggleHamMenu={toggleHamMenu}
        isLoggedIn={isLoggedIn}
        totalItems={totalItems}
        syncingCart={syncingCart}
        isActive={isActive}
      />

      {/* Desktop Menu */}
      <nav className={navbarStyles.desktopContainer}>
        <div className={navbarStyles.linksContainer}>
          <NavbarBrand {...brandConfig} />
          <NavigationLinks
            categories={categories}
            menuItems={menuItems}
            isActive={isActive}
          />
        </div>

        <NavbarActions
          isLoggedIn={isLoggedIn}
          isAccountOpen={isAccountOpen}
          setIsAccountOpen={setIsAccountOpen}
          isLoggingOut={isLoggingOut}
          handleLogout={handleLogout}
          totalItems={totalItems}
          syncingCart={syncingCart}
          toggleAccount={toggleAccount}
          isActive={isActive}
        />
      </nav>
      
      <HamMenuSlide
        isHamMenuOpen={isHamMenuOpen}
        setIsHamMenuOpen={setIsHamMenuOpen}
        menuItems={menuItems}
      />
    </>
  );
};

