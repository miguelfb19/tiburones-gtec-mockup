"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { AccessibilityButtons } from "../ui/AccessibilityButtons";
import { type Locale } from "@/lib/dictionaries";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { MobileMenu } from "./MobileMenu";

interface Props {
  readonly lang: Locale;
}

export function TopMenu({ lang }: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Menú items dinámicos según idioma
  const menuItems = [
    { label: lang === "es" ? "Inicio" : "Home", href: `/${lang}` },
    {
      label: lang === "es" ? "Nosotros" : "About Us",
      href: `/${lang}/about-us`,
    },
    {
      label: lang === "es" ? "Servicios" : "Services",
      href: `/${lang}/services`,
    },
    { label: "Blog", href: `/${lang}/blog` },
    {
      label: lang === "es" ? "Trabaja con nosotros" : "Work with us",
      href: `/${lang}/careers`,
    },
    { label: lang === "es" ? "Contacto" : "Contact", href: `/${lang}/contact` },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`min-h-20 ${isDark ? "bg-stone-900 border-stone-900" : "bg-white! border-gray-200"} backdrop-blur-md border-b transition-all justify-center`}
    >
      <Container maxWidth="xl">
        <Toolbar className="justify-between py-2">
          {/* LOGO */}
          <Link href={`/${lang}`} className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="GTEC Logo"
                width={140}
                height={50}
                priority
                className="object-contain"
                style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
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
            variant="ghost"
            className="md:hidden absolute! top-0 right-0"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <MenuIcon fontSize="large" />
          </Button>
          <MobileMenu
            menuItems={menuItems}
            isDark={isDark}
            open={openMenu}
            onCloseAction={() => setOpenMenu(false)}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
