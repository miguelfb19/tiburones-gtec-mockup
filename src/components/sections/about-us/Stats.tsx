"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Stats({ dict }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const stats = [
    {
      value: dict.aboutUsPage.stats.experience.value,
      suffix: "+",
      label: dict.aboutUsPage.stats.experience.label,
      color: "secondary",
    },
    {
      value: dict.aboutUsPage.stats.projects.value,
      suffix: "+",
      label: dict.aboutUsPage.stats.projects.label,
      color: "tertiary",
    },
    {
      value: dict.aboutUsPage.stats.clients.value,
      suffix: "+",
      label: dict.aboutUsPage.stats.clients.label,
      color: "secondary",
    },
    {
      value: dict.aboutUsPage.stats.experts.value,
      suffix: "+",
      label: dict.aboutUsPage.stats.experts.label,
      color: "primary",
    },
  ];

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { light: string; dark: string }> = {
      primary: {
        light: "text-primary-dark",
        dark: "text-primary",
      },
      secondary: {
        light: "text-secondary-dark",
        dark: "text-secondary",
      },
      tertiary: {
        light: "text-tertiary-dark",
        dark: "text-tertiary",
      },
    };

    return isDark ? colorMap[color]?.dark : colorMap[color]?.light;
  };

  return (
    <div className={`py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <Typography
                    variant="h2"
                    className={`font-bold ${getColorClass(stat.color)}`}
                    sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`font-medium mt-2 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
