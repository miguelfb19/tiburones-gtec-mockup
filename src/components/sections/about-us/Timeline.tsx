"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function Timeline() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const milestones = [
    {
      year: "2008",
      title: "Fundación de GTEC",
      description:
        "Iniciamos operaciones con un equipo de 5 personas apasionadas por la tecnología y la innovación.",
    },
    {
      year: "2011",
      title: "Expansión Regional",
      description:
        "Abrimos nuestra primera oficina internacional y alcanzamos 50 clientes activos.",
    },
    {
      year: "2014",
      title: "Reconocimiento Internacional",
      description:
        "Recibimos nuestro primer premio 'Best Technology Partner' por nuestra excelencia en servicio.",
    },
    {
      year: "2017",
      title: "Transformación Digital",
      description:
        "Lanzamos nuestra división de consultoría en transformación digital y cloud computing.",
    },
    {
      year: "2020",
      title: "Certificación Great Place to Work",
      description:
        "Reconocidos como uno de los mejores lugares para trabajar en tecnología.",
    },
    {
      year: "2023",
      title: "Líder del Mercado",
      description:
        "Alcanzamos los 200+ clientes y un equipo de más de 50 profesionales certificados.",
    },
    {
      year: "2024",
      title: "Innovación en IA",
      description:
        "Lanzamiento de nuestra práctica especializada en Inteligencia Artificial y Machine Learning.",
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
              NUESTRO CAMINO
            </Typography>
            <GradientTitle
              as="h2"
              sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}
            >
              Hitos Importantes
            </GradientTitle>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
                isDark ? "bg-secondary/30" : "bg-primary/30"
              } hidden md:block`}
            />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-xl ${
                        isDark
                          ? "bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm"
                          : "bg-linear-to-br from-white to-gray-50"
                      } border ${
                        isDark ? "border-gray-700/50" : "border-gray-200"
                      } shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                    >
                      <Typography
                        variant="h4"
                        className="font-bold text-secondary mb-2"
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="h6"
                        className={`font-bold mb-2 ${
                          isDark ? "text-white" : "text-primary-dark"
                        }`}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: isDark ? "text.secondary" : "text.primary",
                          lineHeight: 1.7,
                        }}
                      >
                        {milestone.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="relative flex items-center justify-center w-16 h-16 my-4 md:my-0">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      className="absolute w-16 h-16 rounded-full bg-linear-to-br from-secondary to-tertiary flex items-center justify-center"
                    >
                      <CheckCircleIcon className="text-white" fontSize="large" />
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
