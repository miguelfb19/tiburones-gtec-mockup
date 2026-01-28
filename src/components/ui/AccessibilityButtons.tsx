"use client";

import { useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import LanguageIcon from "@mui/icons-material/Language";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useColorMode } from "@/providers/ThemeProvider";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  isDark?: boolean;
}

export const AccessibilityButtons = ({ isDark }: Props) => {
  const { toggleColorMode } = useColorMode();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openLanguage = Boolean(anchorEl);
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (newLocale: string) => {
    // pathname actual: /es/about-us o /en/contact
    const segments = pathname.split('/');
    // segments = ['', 'es', 'about-us'] o ['', 'en', 'contact']
    
    if (segments.length > 1) {
      segments[1] = newLocale; // Reemplazar el locale
      const newPath = segments.join('/');
      router.push(newPath);
    } else {
      // En caso de estar en la raíz
      router.push(`/${newLocale}`);
    }
    
    handleLanguageClose();
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 items-center">
      <IconButton
        className={`ml-4 rounded-full p-2 text-white! transition-colors ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-secondary-light! hover:bg-[#1ba5d9]"}`}
        onClick={handleLanguageClick}
        aria-label="Cambiar idioma"
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
          onClick={() => changeLanguage('es')}
          className={`gap-3 px-4 py-2 cursor-pointer ${isDark ? "hover:bg-stone-700" : "hover:bg-gray-100"}`}
        >
          <span className="text-2xl">🇪🇸</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>
            ES
          </span>
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguage('en')}
          className={`gap-3 px-4 py-2 cursor-pointer ${isDark ? "hover:bg-stone-700" : "hover:bg-gray-100"}`}
        >
          <span className="text-2xl">🇺🇸</span>
          <span className={isDark ? "text-white" : "text-gray-900"}>
            EN
          </span>
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
