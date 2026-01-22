"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";

export function OurStory() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className={`py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="overline"
                className="text-secondary font-semibold tracking-wider mb-4 block"
              >
                NUESTRA HISTORIA
              </Typography>
              <GradientTitle
                as="h2"
                sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 3 }}
              >
                Un viaje de innovación y crecimiento
              </GradientTitle>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Desde nuestros inicios en 2008, GTEC ha sido pionera en
                transformar la manera en que las empresas adoptan la tecnología.
                Comenzamos como un pequeño equipo de visionarios apasionados por
                la innovación.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                Hoy, somos reconocidos como líderes en el sector, sirviendo a
                empresas de todos los tamaños con soluciones que impulsan el
                crecimiento y la eficiencia. Nuestro compromiso con la
                excelencia nos ha llevado a ganar múltiples reconocimientos
                internacionales.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                }}
              >
                Pero lo que realmente nos define no son los premios, sino las
                historias de éxito de nuestros clientes y el impacto positivo
                que generamos en sus organizaciones cada día.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className={`relative rounded-2xl overflow-hidden ${
                  isDark
                    ? "shadow-[0_0_40px_rgba(43,194,254,0.2)]"
                    : "shadow-xl"
                }`}
              >
                <div className="aspect-4/3 bg-linear-to-br from-primary/50 via-secondary/50 to-tertiary/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Typography
                      variant="h6"
                      className="text-white font-semibold bg-black/40 px-6 py-3 rounded-lg backdrop-blur-sm"
                    >
                      [Imagen: Oficinas / Equipo]
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-secondary to-tertiary rounded-full opacity-20 blur-2xl"
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
