"use client";

import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { GradientTitle } from "@/components/ui/GradientTitle";
import { FadeIn } from "@/components/animations/FadeIn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export function Team() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const teamMembers = [
    {
      name: "Dr. María González",
      role: "CEO & Fundadora",
      bio: "15+ años liderando transformaciones digitales en Fortune 500",
      avatar: "MG",
      gradient: "from-secondary to-primary",
    },
    {
      name: "Ing. Carlos Rodríguez",
      role: "CTO",
      bio: "Experto en arquitecturas cloud y soluciones escalables",
      avatar: "CR",
      gradient: "from-tertiary to-secondary",
    },
    {
      name: "Laura Martínez",
      role: "Directora de Innovación",
      bio: "Especialista en IA y Machine Learning con 12+ años de experiencia",
      avatar: "LM",
      gradient: "from-primary to-tertiary",
    },
    {
      name: "Roberto Silva",
      role: "Director de Operaciones",
      bio: "10+ años optimizando procesos y mejorando eficiencia operacional",
      avatar: "RS",
      gradient: "from-secondary to-tertiary",
    },
    {
      name: "Ana López",
      role: "Directora de Experiencia al Cliente",
      bio: "Apasionada por crear experiencias excepcionales para nuestros clientes",
      avatar: "AL",
      gradient: "from-primary to-secondary",
    },
    {
      name: "Javier Torres",
      role: "Director de Seguridad",
      bio: "Experto en ciberseguridad y cumplimiento normativo internacional",
      avatar: "JT",
      gradient: "from-tertiary to-primary",
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
              CONOCE AL EQUIPO
            </Typography>
            <GradientTitle
              as="h2"
              sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, mb: 3 }}
            >
              Liderazgo que inspira
            </GradientTitle>
            <Typography
              variant="h6"
              sx={{
                color: isDark ? "text.secondary" : "text.primary",
                maxWidth: "700px",
                mx: "auto",
              }}
            >
              Nuestro equipo directivo combina décadas de experiencia con una
              visión innovadora del futuro
            </Typography>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-xl ${
                  isDark
                    ? "bg-linear-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm"
                    : "bg-white"
                } border ${
                  isDark ? "border-gray-700/50" : "border-gray-200"
                } shadow-lg hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Avatar */}
                <div className="flex justify-center mb-4">
                  <div
                    className={`relative w-24 h-24 rounded-full bg-linear-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                  >
                    {member.avatar}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <Typography
                    variant="h6"
                    className={`font-bold mb-1 ${
                      isDark ? "text-white" : "text-primary-dark"
                    }`}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="text-secondary font-semibold mb-3"
                  >
                    {member.role}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: isDark ? "text.secondary" : "text.primary",
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {member.bio}
                  </Typography>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        isDark
                          ? "bg-gray-700 hover:bg-secondary"
                          : "bg-gray-100 hover:bg-secondary"
                      } transition-colors`}
                    >
                      <LinkedInIcon
                        sx={{ fontSize: 20 }}
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        isDark
                          ? "bg-gray-700 hover:bg-secondary"
                          : "bg-gray-100 hover:bg-secondary"
                      } transition-colors`}
                    >
                      <TwitterIcon
                        sx={{ fontSize: 20 }}
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        isDark
                          ? "bg-gray-700 hover:bg-secondary"
                          : "bg-gray-100 hover:bg-secondary"
                      } transition-colors`}
                    >
                      <EmailIcon
                        sx={{ fontSize: 20 }}
                        className={isDark ? "text-gray-300" : "text-gray-600"}
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
