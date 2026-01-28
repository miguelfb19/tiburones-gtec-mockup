"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Mission({ dict }: Props) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const items = [
    {
      icon: RocketLaunchIcon,
      title: dict.aboutUsPage.mission.mission.title,
      description: dict.aboutUsPage.mission.mission.description,
      gradient: "from-secondary to-primary",
    },
    {
      icon: VisibilityIcon,
      title: dict.aboutUsPage.mission.vision.title,
      description: dict.aboutUsPage.mission.vision.description,
      gradient: "from-tertiary to-secondary",
    },
  ];

  return (
    <div className={`py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Typography
              variant="overline"
              className="text-secondary font-semibold tracking-wider mb-4 block"
            >
              {dict.aboutUsPage.mission.label}
            </Typography>
            <GradientTitle
              as="h2"
              sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}
            >
              {dict.aboutUsPage.mission.title}
            </GradientTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-2xl ${
                  isDark
                    ? "bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
                    : "bg-linear-to-br from-white to-gray-50"
                } border ${
                  isDark ? "border-gray-700/50" : "border-gray-200"
                } shadow-lg hover:shadow-2xl transition-shadow duration-300`}
              >
                <div
                  className={`inline-flex p-4 rounded-xl bg-linear-to-br ${item.gradient} mb-6`}
                >
                  <item.icon className="text-white" sx={{ fontSize: 40 }} />
                </div>

                <Typography
                  variant="h4"
                  className={`font-bold mb-4 ${
                    isDark ? "text-white" : "text-primary-dark"
                  }`}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: isDark ? "text.secondary" : "text.primary",
                    lineHeight: 1.8,
                  }}
                >
                  {item.description}
                </Typography>

                {/* Decorative gradient orb */}
                <div
                  className={`absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br ${item.gradient} rounded-full opacity-10 blur-2xl`}
                />
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
