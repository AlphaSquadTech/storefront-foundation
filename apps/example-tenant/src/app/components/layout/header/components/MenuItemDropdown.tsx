import Link from "next/link";
import { ChevronDownIcon } from "@/app/utils/svgs/chevronDownIcon";
import { useDropdown } from "../hooks/useDropdown";
import { navbarStyles } from "../styles/navbarStyles";
import { normalizeMenuUrl } from "../utils/normalizeMenuUrl";
import type { MenuItem } from "../hooks/useNavbarData";

interface MenuItemDropdownProps {
  item: MenuItem;
  isActive: (href: string) => boolean;
}

export const MenuItemDropdown = ({ item, isActive }: MenuItemDropdownProps) => {
  const { isOpen, handleMouseEnter, handleMouseLeave } = useDropdown(300);
  const normalizedUrl = normalizeMenuUrl(item.url);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={normalizedUrl}
        prefetch={false}
        className={`${navbarStyles.navLinkBase} ${
          isActive(normalizedUrl)
            ? navbarStyles.navLinkActive
            : navbarStyles.navLinkInactive
        } whitespace-nowrap`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <div className="flex items-center  gap-2 transition-all ease-in-out duration-300">
          <span>{item.name}</span>
          <span
            className={`size-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            {ChevronDownIcon}
          </span>
        </div>
      </Link>

      {isOpen && (
        <div
          className={navbarStyles.dropdown.container}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-label={`${item.name} submenu`}
        >
          {item.children?.map((child) => (
            <Link
              key={child.id}
              href={normalizeMenuUrl(child.url)}
              prefetch={false}
              className={navbarStyles.dropdown.item}
              role="menuitem"
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};