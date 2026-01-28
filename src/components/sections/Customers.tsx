"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typography, useTheme } from "@mui/material";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { customers } from "@/contants/customers";
import { FadeIn } from "../animations/FadeIn";
import { getDictionary } from "@/lib/dictionaries";

interface CustomersProps {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}

export const Customers = ({ dict }: CustomersProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const isMobile = theme.breakpoints.down("sm");

  // Triplicar los logos para asegurar continuidad perfecta
  const duplicatedCustomers = [...customers, ...customers, ...customers];

  return (
    <section className="py-16">
      <FadeIn
        direction="right"
        duration={1}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div className="text-center mb-12 flex flex-col items-center gap-5">
          <Typography
            variant="overline"
            className="font-semibold text-base tracking-widest mb-4 block"
            sx={{ color: "secondary.main" }}
          >
            {dict.customers.title}
          </Typography>
          <GradientTitle as="h2" className="mb-6 text-center">
            {dict.customers.subtitle}
          </GradientTitle>
          <Typography
            variant="h6"
            className="max-w-2xl mx-auto font-normal"
            sx={{ color: "text.secondary" }}
          >
            {dict.customers.description}
          </Typography>
        </div>

        {/* Carousel infinito */}
        <div className="relative overflow-hidden w-full max-w-8xl py-5">
          {/* Gradiente izquierdo */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-r ${
              isDark ? "from-[#0a0a0a]" : "from-white"
            } to-transparent`}
          />
          {/* Gradiente derecho */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-l ${
              isDark ? "from-[#0a0a0a]" : "from-white"
            } to-transparent`}
          />
          <motion.div
            className="flex gap-12"
            animate={{
              x: [0, -((200 + 48) * customers.length)],
            }}
            transition={{
              x: {
                duration: isMobile ? 15 : 20,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              },
            }}
          >
            {duplicatedCustomers.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                className={`shrink-0 flex items-center justify-center p-6 rounded-lg ${
                  isDark ? "bg-[#1a1a1a]" : "bg-white"
                } shadow-md hover:shadow-xl transition-shadow duration-300`}
                style={{ width: "200px", height: "120px" }}
              >
                <Image
                  src={customer.logo}
                  alt={customer.name}
                  width={160}
                  height={80}
                  className={`object-contain ${isDark ? "brightness-110" : ""} opacity-70`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
};
