"use client";

import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export const Awards = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex flex-wrap justify-center gap-8 items-center pb-10"
    >
      <Image
        src="/images/google_partner.avif"
        alt="Google Partner"
        width={150}
        height={150}
        className={`rounded-lg ${isDark ? "drop-shadow-[0_0_20px_rgba(93,211,255,0.6)] bg-secondary/5" : "drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"}`}
      />
      <Image
        src="/images/great-place-to-work.avif"
        alt="Great Place to Work"
        width={100}
        height={100}
        className={`rounded-lg ${isDark ? "drop-shadow-[0_0_20px_rgba(93,211,255,0.6)] bg-secondary/5" : "drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"}`}
      />
    </motion.div>
  );
};
