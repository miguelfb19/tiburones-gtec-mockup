'use client';

import { Container, Typography, Box } from '@mui/material';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { FadeIn } from '@/components/animations/FadeIn';
import CloudIcon from '@mui/icons-material/Cloud';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import PsychologyIcon from '@mui/icons-material/Psychology';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const services = [
  {
    title: 'Modernización Digital',
    description: 'Transformamos tu infraestructura tecnológica con las mejores prácticas de la nube, garantizando escalabilidad, seguridad y eficiencia operativa.',
    icon: <CloudIcon sx={{ fontSize: 32 }} />,
    color: 'primary' as const,
  },
  {
    title: 'Google Workspace',
    description: 'Potencia la colaboración de tu equipo con las herramientas de productividad más avanzadas del mercado, integradas y seguras.',
    icon: <WorkspacesIcon sx={{ fontSize: 32 }} />,
    color: 'secondary' as const,
  },
  {
    title: 'IA Generativa',
    description: 'Aprovecha el poder de la Inteligencia Artificial de Google para automatizar procesos, generar insights y transformar tu negocio.',
    icon: <PsychologyIcon sx={{ fontSize: 32 }} />,
    color: 'tertiary' as const,
  },
  {
    title: 'Analítica de Datos',
    description: 'Convierte tus datos en decisiones estratégicas con las herramientas de análisis y visualización más potentes de Google Cloud.',
    icon: <QueryStatsIcon sx={{ fontSize: 32 }} />,
    color: 'primary' as const,
  },
  {
    title: 'Servicios Administrados',
    description: 'Deja la gestión de tu infraestructura en manos expertas. Nos encargamos de todo para que te enfoques en hacer crecer tu negocio.',
    icon: <ManageAccountsIcon sx={{ fontSize: 32 }} />,
    color: 'secondary' as const,
  },
];

export function Services() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        <FadeIn direction="up" className="text-center mb-12">
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 600,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              mb: 2,
              display: 'block',
            }}
          >
            Nuestras Soluciones
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Servicios especializados para tu empresa
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              maxWidth: 700,
              mx: 'auto',
              fontWeight: 400,
            }}
          >
            Como Partner oficial de Google, ofrecemos soluciones integrales
            que impulsan la transformación digital de tu organización
          </Typography>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </Box>
  );
}
