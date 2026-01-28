"use client";

import { useState, useTransition } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useColorMode } from "@/providers/ThemeProvider";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

interface Props {
    isDark?: boolean;
}

export const AccessibilityButtons = ({ isDark }: Props) => {
  const { toggleColorMode } = useColorMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorEl);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (newLocale: string) => {
    startTransition(() => {
      // Remove current locale from pathname and add new locale
      const currentPath = pathname.replace(`/${locale}`, '');
      router.replace(`/${newLocale}${currentPath}`);
    });
    handleLanguageClose();
  };

  return (
    <div className="flex gap-2 items-center">
      <IconButton
        className={`ml-4 rounded-full p-2 text-white! transition-colors ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-secondary-light! hover:bg-[#1ba5d9]"}`}
        onClick={handleLanguageClick}
        aria-label="Cambiar idioma"
        disabled={isPending}
      >
        <LanguageIcon />
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={openLanguage}
        onClose={handleLanguageClose}
        className="mt-2"
        slotProps={{
          paper: {
            className: `${isDark ? "bg-stone-800" : "bg-white"} shadow-lg`,
          },
        }}
      >
        <MenuItem 
          onClick={() => handleLanguageSelect("es")}
          className={`gap-3 px-4 py-2 cursor-pointer ${isDark ? "hover:bg-stone-700" : "hover:bg-gray-100"} ${locale === "es" ? "bg-stone-700/50" : ""}`}
        >
          <span className="text-2xl">🇪🇸</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>Español</span>
        </MenuItem>
        <MenuItem 
          onClick={() => handleLanguageSelect("en")}
          className={`gap-3 px-4 py-2 cursor-pointer ${isDark ? "hover:bg-stone-700" : "hover:bg-gray-100"} ${locale === "en" ? "bg-gray-200/50" : ""}`}
        >
          <span className="text-2xl">🇺🇸</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>English</span>
        </MenuItem>
      </Menu>

      <IconButton
        className={`rounded-full p-2 text-white! transition-colors ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-secondary-light! hover:bg-[#1ba5d9]"}`}
        onClick={() => {}}
        aria-label="Accesibilidad"
      >
        <AccessibilityNewIcon />
      </IconButton>
      <IconButton
        className={`rounded-full p-2 text-white! transition-colors ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-secondary-light! hover:bg-[#1ba5d9]"}`}
        onClick={toggleColorMode}
        aria-label="Toggle theme"
      >
        {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
};
