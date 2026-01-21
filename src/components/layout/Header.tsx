"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useColorMode } from "@/providers/ThemeProvider";
import { menuItems } from "@/contants/menu-items";

export function Header() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
  const isDark = theme.palette.mode === "dark";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      className={`min-h-20 ${isDark ? "bg-stone-900 border-stone-900" : "bg-white! border-gray-200"} backdrop-blur-md border-b transition-all justify-center`}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
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
            <IconButton
              sx={{
                ml: 2,
                borderRadius: "100%",
                padding: 1,
                bgcolor: isDark ? "rgba(255, 255, 255, 0.1)" : "#1ba5d9",
                ":hover": {
                  bgcolor: isDark ? "rgba(255, 255, 255, 0.2)" : "#38bdf8",
                },
              }}
              onClick={toggleColorMode}
              color="inherit"
              aria-label="Toggle theme"
            >
              {isDark ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
