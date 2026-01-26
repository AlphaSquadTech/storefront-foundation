import { cookies } from "next/headers";
import { Suspense } from "react";
import { NavBar } from "./navBar";
import TopBar from "./topBar";
import { fetchNavbarData } from "./utils/fetchNavbarData";

export const Header = async () => {
  const cookieStore = await cookies();
  const initialIsLoggedIn =
    cookieStore.get("isLoggedIn")?.value === "1" || !!cookieStore.get("token");

  // Fetch navigation data server-side for SEO
  const { categories, menuItems } = await fetchNavbarData();

  return (
    <header className="w-full">
      <Suspense
        fallback={
          <div
            className="w-full"
            style={{ backgroundColor: "var(--color-secondary-900)", height: 36 }}
          />
        }
      >
        {/* Contact + Timings Banner */}
        <TopBar />
      </Suspense>
      <NavBar
        initialIsLoggedIn={initialIsLoggedIn}
        initialCategories={categories}
        initialMenuItems={menuItems}
      />
    </header>
  );
};
