"use client";

import { Typography, useTheme } from "@mui/material";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "../../animations/FadeIn";
import { ContactItems } from "./ContactItems";
import { Form } from "./Form";

export function ContactMain() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div
      className={`relative overflow-hidden`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16 flex flex-col items-center gap-5">
            <GradientTitle variant="h1" component="h1">
              Hablemos de tu proyecto
            </GradientTitle>
            <Typography
              variant="h6"
              className={`max-w-2xl mx-auto ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Estamos aquí para ayudarte a transformar tu negocio con las
              mejores soluciones de Google Cloud
            </Typography>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Información de Contacto */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <Typography
                  variant="h4"
                  className={`font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Información de Contacto
                </Typography>
                <Typography
                  variant="body1"
                  className={`mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                >
                  Nuestro equipo de expertos está listo para asesorarte en la
                  mejor solución para tu empresa.
                </Typography>
              </div>

              {/* Contact Items */}
              <ContactItems />

              {/* Horarios */}
              <div
                className={`p-6 rounded-xl ${isDark ? "bg-linear-to-br from-primary/20 to-secondary/20 border border-secondary/30" : "bg-linear-to-br from-primary/5 to-secondary/5 border border-gray-200"}`}
              >
                <Typography
                  variant="h6"
                  className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Horario de Atención
                </Typography>
                <Typography
                  variant="body2"
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábado y Domingo: Cerrado
                </Typography>
              </div>
            </div>
          </FadeIn>

          {/* Formulario */}
          <Form />
        </div>
      </div>
    </div>
  );
}
