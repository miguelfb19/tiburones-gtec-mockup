import Link from "next/link";
import { Button } from "../ui/Button";
import { AccessibilityButtons } from "../ui/AccessibilityButtons";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  isDark: boolean;
  open: boolean;
  menuItems: { label: string; href: string }[];
  onCloseAction: () => void;
}

export const MobileMenu = ({
  isDark,
  open,
  menuItems,
  onCloseAction,
}: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 flex flex-col gap-4 transition-all duration-500 ${open ? "translate-x-0" : "-translate-x-full"} ${isDark ? "bg-stone-900" : "bg-white"} md:hidden h-screen w-full pt-10 overflow-x-hidden`}
    >
      <nav className="flex flex-col gap-4 items-center">
        {menuItems.map((item) => (
          <Button
            key={item.label}
            variant={
              item.label === "Contacto" || item.label === "Contact"
                ? "solid"
                : "ghost"
            }
            size="medium"
          >
            <Link href={item.href}>{item.label}</Link>
          </Button>
        ))}
        <AccessibilityButtons isDark={isDark} />
      </nav>
      <Button
        className="absolute! top-2 right-1"
        variant="ghost"
        onClick={onCloseAction}
      >
        <CloseIcon fontSize="large"/>
      </Button>
    </div>
  );
};
