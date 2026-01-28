"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { Stars } from "@/components/animations/Stars";
import { FadeIn } from "@/components/animations/FadeIn";
import FloatingClouds from "@/components/animations/FloatingClouds";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function AboutHero({ dict }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div
      className={`relative overflow-hidden py-20`}
    >
      {isDark ? <Stars /> : <FloatingClouds />}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="overline"
                className="text-secondary font-semibold tracking-wider mb-4 block"
              >
                {dict.aboutUsPage.hero.label}
              </Typography>
              <GradientTitle
                as="h1"
                sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 3 }}
              >
                {dict.aboutUsPage.hero.title}
              </GradientTitle>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                {dict.aboutUsPage.hero.description}
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-12"
            >
              <div
                className={`relative rounded-2xl overflow-hidden ${
                  isDark
                    ? "shadow-[0_0_60px_rgba(43,194,254,0.3)]"
                    : "shadow-2xl"
                }`}
              >
                <div className="aspect-video bg-linear-to-br from-primary via-secondary to-tertiary opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Typography
                    variant="h6"
                    className="text-white font-semibold bg-black/30 px-6 py-3 rounded-lg backdrop-blur-sm"
                  >
                    {dict.aboutUsPage.hero.imageAlt}
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
