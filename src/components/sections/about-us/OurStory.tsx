"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function OurStory({ dict }: Props) {
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
                {dict.aboutUsPage.ourStory.label}
              </Typography>
              <GradientTitle
                as="h2"
                sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 3 }}
              >
                {dict.aboutUsPage.ourStory.title}
              </GradientTitle>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {dict.aboutUsPage.ourStory.p1}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                  mb: 3,
                }}
              >
                {dict.aboutUsPage.ourStory.p2}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: isDark ? "text.secondary" : "text.primary",
                  lineHeight: 1.8,
                }}
              >
                {dict.aboutUsPage.ourStory.p3}
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
                      {dict.aboutUsPage.ourStory.imageAlt}
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
