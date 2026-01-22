"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ServiceCardProps {
  title: string;
  description: string;
  img: string;
  color: "primary" | "secondary" | "tertiary";
  link: string;
  invert?: boolean;
}

export function ServiceCard({
  title,
  description,
  img,
  color,
  link,
  invert = false,
}: Readonly<ServiceCardProps>) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [isHovered, setIsHovered] = useState(false);

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
      <div
        id="description"
        className="flex flex-col gap-5 h-full justify-center"
      >
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="rounded-xl p-5 hover:shadow-2xl shadow-secondary-light transition-shadow relative overflow-hidden"
        >
          {/* Contenido con blur */}
          <Link
            href={link}
            className="transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-5">
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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center pointer-events-none"
              >
                <div className="pointer-events-auto">
                  <Button variant="ghost" size="medium">
                    <ArrowForwardIcon />
                  </Button>
                </div>
              </motion.div>
            </div>
            <Typography
              variant="body1"
              color="text.secondary"
              className="leading-relaxed"
            >
              {description}
            </Typography>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
