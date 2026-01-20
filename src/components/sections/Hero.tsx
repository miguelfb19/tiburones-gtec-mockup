"use client";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { BubbleAnimation } from "@/components/ui/BubbleAnimation";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-32">
      <BubbleAnimation />
      <div
        className="absolute rounded-full pointer-events-none w-[40%] h-[60%] -top-[10%] -right-[5%] bg-[radial-gradient(circle, rgba(43, 194, 254, 0.1) 0%, transparent 70%)]"
      />
      <div
        className="absolute rounded-full pointer-events-none w-[35%] h-[50%] -bottom-[5%] -left-[5%] bg-[radial-gradient(circle, rgba(43, 79, 124, 0.08) 0%, transparent 70%)]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col items-center gap-12 w-full">
          <motion.div
            className="absolute inset-0 pointer-events-none flex justify-center z-0"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: [0.6, 0.85, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="w-full h-full"
              style={{
                background:
                  "radial-gradient(ellipse 500px 500px at center top, transparent 0%, transparent 20%, rgba(43,194,254,0.3) 45%, rgba(43,194,254,0.4) 70%, rgba(43,194,254,0.2) 100%)",
                filter: "blur(60px)",
              }}
            />
          </motion.div>
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
                  <div
                    className="w-full h-full rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(43,194,254,0.35) 0%, rgba(43,194,254,0.18) 40%, transparent 75%)",
                      filter: "blur(40px)",
                    }}
                  />
                </motion.div>
                <Image
                  src="/images/logo.png"
                  alt="GTEC"
                  width={400}
                  height={150}
                  className="object-contain opacity-90 relative"
                  style={{
                    filter:
                      "drop-shadow(0 0 12px rgba(43,194,254,0.45)) drop-shadow(0 0 24px rgba(43,194,254,0.25))",
                  }}
                />
              </motion.div>

            </div>
          </motion.div>

          {/* Content section - now below */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full text-center "
          >
            <div className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="overline"
                  className="font-semibold text-base tracking-widest"
                  sx={{ color: "secondary.main" }}
                >
                  Google Cloud Partner
                </Typography>
              </motion.div>
            </div>

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
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <Button
                variant="solid"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                Conoce nuestras soluciones
              </Button>
              <Button
                variant="outline"
                size="large"
              >
                Contacto
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 flex flex-wrap justify-center gap-8 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <Typography
                    variant="caption"
                    display="block"
                    className="font-semibold"
                  >
                    Google Partner
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Oficial
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-tertiary to-tertiary-light flex items-center justify-center text-white font-bold text-sm">
                  5+
                </div>
                <div>
                  <Typography
                    variant="caption"
                    display="block"
                    className="font-semibold"
                  >
                    Great Place to Work
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Años consecutivos
                  </Typography>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
