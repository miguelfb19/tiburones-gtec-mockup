"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  img: string;
  color: "primary" | "secondary" | "tertiary";
  invert?: boolean;
}

export function ServiceCard({
  title,
  description,
  img,
  color,
  invert = false,
}: Readonly<ServiceCardProps>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const colorMap = {
    primary: {
      bg: "rgba(43, 79, 124, 0.05)",
      border: "#2B4F7C",
      iconBg: isDark ? "white" : "#2B4F7C",
    },
    secondary: {
      bg: "rgba(43, 194, 254, 0.05)",
      border: "#2bc2fe",
      iconBg: "#2bc2fe",
    },
    tertiary: {
      bg: "rgba(228, 0, 92, 0.05)",
      border: "#e4005c",
      iconBg: "#e4005c",
    },
  };

  const selectedColor = colorMap[color];

  return (
    <div
      className={`flex ${invert ? "flex-row-reverse" : ""} items-center gap-10`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -8 }}
        className={`w-110 shrink-0 hover:shadow-2xl shadow-secondary-light`}
      >
        <Image
          src={img}
          alt={title}
          width={1000}
          height={1000}
          className="shadow rounded-xl w-full h-full object-cover"
        />
      </motion.div>
      <div className="flex flex-col gap-5 h-full justify-center">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`rounded-xl p-5 hover:shadow-2xl shadow-secondary-light transition-shadow`}
        >
          <Typography
            variant="h2"
            component="h3"
            className="font-semibold"
            sx={{
              color: selectedColor.iconBg,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className="leading-relaxed"
          >
            {description}
          </Typography>
        </motion.div>
      </div>
    </div>
  );
}
