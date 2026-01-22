"use client";

import { Typography, useTheme } from "@mui/material";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { services } from "@/contants/solutions";
import { Stars } from '../animations/Stars';
import FloatingClouds from "../animations/FloatingClouds";

export function Services() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <section className={`py-10 ${isDark ? "" : "bg-white"} relative overflow-visible`}>
      {isDark ? <Stars /> : <FloatingClouds />}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn
          direction="up"
          className="text-center mb-12 flex flex-col items-center gap-5"
        >
          <Typography
            variant="overline"
            className="font-semibold text-base tracking-widest mb-4 block"
            sx={{
              color: "secondary.main",
            }}
          >
            Nuestras Soluciones
          </Typography>
          <GradientTitle as="h2" className="mb-6 text-center">
            Servicios especializados para tu empresa
          </GradientTitle>
          <Typography
            variant="h6"
            className="max-w-2xl mx-auto font-normal"
            sx={{
              color: "text.secondary",
            }}
          >
            Como Partner oficial de Google, ofrecemos soluciones integrales que
            impulsan la transformación digital de tu organización
          </Typography>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} invert={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
