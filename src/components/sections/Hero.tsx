"use client";

import { useRef } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { GradientTitle } from "@/components/ui/GradientTitle";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects for cubes
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);
  
  const rotate1 = useTransform(scrollY, [0, 500], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 500], [0, -30]);
  const rotate3 = useTransform(scrollY, [0, 500], [0, 60]);

  return (
    <Box
      ref={containerRef}
      sx={{
        background: "transparent",
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 16 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "40%",
          height: "60%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(43, 194, 254, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-5%",
          left: "-5%",
          width: "35%",
          height: "50%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(43, 79, 124, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col items-center gap-12">
          {/* Animation section with logo - now on top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center w-full"
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                aspectRatio: "1/1",
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="GTEC"
                  width={400}
                  height={150}
                  className="object-contain opacity-20"
                />
              </motion.div>

              {/* Floating cards that follow scroll */}
              {[
                { color: "#2B4F7C", baseX: -80, baseY: -60, y: y1, rotate: rotate1 },
                { color: "#2bc2fe", baseX: 80, baseY: -40, y: y2, rotate: rotate2 },
                { color: "#e4005c", baseX: -60, baseY: 80, y: y3, rotate: rotate3 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    x: item.baseX,
                    y: item.baseY, // Initial position
                  }}
                >
                  <motion.div
                    style={{
                      y: item.y, // Scroll-bound movement
                      rotate: item.rotate,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.2 }}
                    >
                      <div
                        style={{
                          width: 80,
                          height: 80,
                          borderRadius: 16,
                          backgroundColor: item.color,
                          boxShadow: `0 8px 24px ${item.color}40`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Content section - now below */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full text-center"
          >
            <Box sx={{ mb: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: "secondary.main",
                    fontWeight: 600,
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  Google Cloud Partner
                </Typography>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <GradientTitle
                as="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                  lineHeight: 1.1,
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
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontWeight: 400,
                  lineHeight: 1.6,
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
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Conoce nuestras soluciones
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Contacto
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="!my-8 flex flex-wrap justify-center gap-6 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontWeight: 600 }}
                  >
                    Google Partner
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Oficial
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tertiary to-tertiary-light flex items-center justify-center text-white font-bold text-sm">
                  5+
                </div>
                <div>
                  <Typography
                    variant="caption"
                    display="block"
                    sx={{ fontWeight: 600 }}
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
      </Container>
    </Box>
  );
}
