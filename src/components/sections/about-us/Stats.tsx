"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Años de Experiencia",
    color: "secondary",
  },
  {
    value: 500,
    suffix: "+",
    label: "Proyectos Completados",
    color: "tertiary",
  },
  {
    value: 200,
    suffix: "+",
    label: "Clientes Satisfechos",
    color: "secondary",
  },
  {
    value: 50,
    suffix: "+",
    label: "Profesionales Expertos",
    color: "primary",
  },
];

export function Stats() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
