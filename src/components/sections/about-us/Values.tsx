"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Values({ dict }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const values = [
    {
      icon: StarIcon,
      title: dict.aboutUsPage.values.items.excellence.title,
      description: dict.aboutUsPage.values.items.excellence.description,
      color: "secondary",
    },
    {
      icon: LightbulbIcon,
      title: dict.aboutUsPage.values.items.innovation.title,
      description: dict.aboutUsPage.values.items.innovation.description,
      color: "tertiary",
    },
    {
      icon: SecurityIcon,
      title: dict.aboutUsPage.values.items.integrity.title,
      description: dict.aboutUsPage.values.items.integrity.description,
      color: "primary",
    },
    {
      icon: PeopleIcon,
      title: dict.aboutUsPage.values.items.collaboration.title,
      description: dict.aboutUsPage.values.items.collaboration.description,
      color: "secondary",
    },
    {
      icon: TrendingUpIcon,
      title: dict.aboutUsPage.values.items.improvement.title,
      description: dict.aboutUsPage.values.items.improvement.description,
      color: "tertiary",
    },
    {
      icon: FavoriteIcon,
      title: dict.aboutUsPage.values.items.passion.title,
      description: dict.aboutUsPage.values.items.passion.description,
      color: "primary",
    },
  ];

  return (
    <div className={`py-20 ${isDark ? "" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Typography
              variant="overline"
              className="text-secondary font-semibold tracking-wider mb-4 block"
            >
              {dict.aboutUsPage.values.label}
            </Typography>
            <GradientTitle
              as="h2"
              sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 3 }}
            >
              {dict.aboutUsPage.values.title}
            </GradientTitle>
            <Typography
              variant="h6"
              sx={{
                color: isDark ? "text.secondary" : "text.primary",
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              {dict.aboutUsPage.values.subtitle}
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative p-6 rounded-xl ${
                  isDark
                    ? "bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm"
                    : "bg-white"
                } border ${
                  isDark ? "border-gray-700/50" : "border-gray-200"
                } shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-${value.color}/10 mb-4 group-hover:bg-${value.color}/20 transition-colors`}
                >
                  <value.icon
                    className={`text-${value.color}`}
                    sx={{ fontSize: 32 }}
                  />
                </div>

                <Typography
                  variant="h6"
                  className={`font-bold mb-3 ${
                    isDark ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {value.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: isDark ? "text.secondary" : "text.primary",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </Typography>

                {/* Hover effect border */}
                <div
                  className={`absolute inset-0 rounded-xl border-2 border-${value.color}/0 group-hover:border-${value.color}/30 transition-colors duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
