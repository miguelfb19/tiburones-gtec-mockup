"use client";

import Link from "next/link";
import Image from "next/image";
import { AppBar, Toolbar, Container, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { menuItems } from "@/contants/menu-items";
import { AccessibilityButtons } from "../ui/AccessibilityButtons";

export function TopMenu() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`min-h-20 ${isDark ? "bg-stone-900 border-stone-900" : "bg-white! border-gray-200"} backdrop-blur-md border-b transition-all justify-center`}
    >
      <Container maxWidth="xl">
        <Toolbar className="justify-between py-2">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
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
                variant={item.label === "Contacto" ? "solid" : "ghost"}
                size="medium"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
            <AccessibilityButtons isDark={isDark} />
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
