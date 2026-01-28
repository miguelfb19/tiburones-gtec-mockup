"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@/components/ui/Button";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { experienceData } from "@/contants/experience-data";
import { FadeIn } from "../animations/FadeIn";
import { getDictionary } from "@/lib/dictionaries";

interface CTAProps {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function CTA({ dict }: CTAProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24`}
    >
      <div className="absolute inset-0 opacity-5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-5"
        >
          <GradientTitle
            as="h2"
            className="mb-8 text-center"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            {dict.cta.title}
          </GradientTitle>
          <Typography
            variant="h6"
            className="mb-12 text-gray-600 max-w-xl mx-auto font-normal text-center"
          >
            {dict.cta.subtitle}
          </Typography>
          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <Button variant="solid" size="large" endIcon={<ArrowForwardIcon />}>
              {dict.cta.button}
            </Button>
            <Button variant="outline" size="large">
              {dict.hero.ctaContact}
            </Button>
          </div>

          {/* Trust indicators */}
          <FadeIn
            direction="up"
            duration={1}
            className="mt-8 pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {experienceData.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
                className={`text-center border-quaternary px-3 py-8 rounded-lg shadow-lg ${isDark ? "shadow-white" : ""} bg-linear-to-br from-secondary-light/70 via-70% via-white to-secondary-light/70 hover:via-40% transition-colors duration-300`}
              >
                <Typography
                  variant="h2"
                  className={`font-bold text-secondary mb-2`}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  className={`font-semibold! text-gray-600`}
                >
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
