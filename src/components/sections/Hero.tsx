"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { Button } from "@/components/ui/Button";
import { Stars } from "../animations/Stars";
import { Awards } from "./Awards";

export function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Generar estrellas aleatorias

  return (
    <>
      <div
        className={`relative overflow-hidden ${isDark ? "" : "bg-linear-to-b from-white to-secondary-light"}`}
      >
        {/* Estrellas animadas solo en modo oscuro */}
        {isDark && <Stars />}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col items-center gap-10 w-full">
            <motion.div
              className="absolute inset-0 pointer-events-none flex justify-center z-0"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 0.85, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center items-center w-full"
            >
              <div className="relative w-full max-w-125 aspect-square">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Glow overlay behind the logo */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0.6, scale: 0.98 }}
                    animate={{
                      opacity: [0.6, 0.85, 0.6],
                      scale: [0.98, 1.03, 0.98],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-full h-full rounded-2xl" />
                  </motion.div>
                  <Image
                    src="/images/logo.png"
                    alt="GTEC"
                    width={400}
                    height={150}
                    className={`object-contain opacity-90 relative z-10 ${
                      isDark
                        ? "drop-shadow-[0_0_60px_rgba(93,211,255,0.6)]"
                        : "drop-shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                    }`}
                  />
                </motion.div>

                {/* Reflejo ovalado debajo de la imagen */}
                <motion.div
                  animate={{
                    scaleX: [1.4, 1, 1.4],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-80 h-20 rounded-[50%]"
                  style={{
                    background: isDark
                      ? "radial-gradient(ellipse at center, rgba(93, 211, 255, 0.5) 0%, rgba(93, 211, 255, 0.2) 40%, transparent 70%)"
                      : "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 40%, transparent 70%)",
                    filter: "blur(3px)",
                  }}
                />
              </div>
            </motion.div>
            {/* Content section - now below */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-full text-center flex flex-col items-center gap-5 md:gap-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <GradientTitle
                  as="h1"
                  className="mb-8 leading-tight px-4"
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3.5rem",
                      lg: "4rem",
                    },
                  }}
                >
                  Transformamos tu negocio con tecnología Google
                </GradientTitle>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  variant="h5"
                  className="mb-12 font-normal leading-relaxed px-4"
                  sx={{
                    color: "text.secondary",
                  }}
                >
                  Soluciones empresariales de vanguardia para impulsar tu
                  transformación digital
                </Typography>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap justify-center gap-6"
              >
                <Button
                  variant="solid"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                >
                  Conoce nuestras soluciones
                </Button>
                <Button variant="outline" size="large">
                  Contacto
                </Button>
              </motion.div>

              {/* RECONOCIMIENTOS */}
              <Awards />
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={`h-30 ${isDark ? "bg-[#0a0a0a]" : "bg-linear-to-b from-secondary-light to-transparent"}`}
      ></div>
    </>
  );
}
