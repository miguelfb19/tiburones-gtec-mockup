'use client';

import { Typography } from '@mui/material';
import { GradientTitle } from '@/components/ui/GradientTitle';
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
    icon: <CloudIcon className="text-[32px]" />,
    color: 'primary' as const,
  },
  {
    title: 'Google Workspace',
    description: 'Potencia la colaboración de tu equipo con las herramientas de productividad más avanzadas del mercado, integradas y seguras.',
    icon: <WorkspacesIcon className="text-[32px]" />,
    color: 'secondary' as const,
  },
  {
    title: 'IA Generativa',
    description: 'Aprovecha el poder de la Inteligencia Artificial de Google para automatizar procesos, generar insights y transformar tu negocio.',
    icon: <PsychologyIcon className="text-[32px]" />,
    color: 'tertiary' as const,
  },
  {
    title: 'Analítica de Datos',
    description: 'Convierte tus datos en decisiones estratégicas con las herramientas de análisis y visualización más potentes de Google Cloud.',
    icon: <QueryStatsIcon className="text-[32px]" />,
    color: 'primary' as const,
  },
  {
    title: 'Servicios Administrados',
    description: 'Deja la gestión de tu infraestructura en manos expertas. Nos encargamos de todo para que te enfoques en hacer crecer tu negocio.',
    icon: <ManageAccountsIcon className="text-[32px]" />,
    color: 'secondary' as const,
  },
];

export function Services() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" className="text-center mb-12 flex flex-col items-center gap-5">
          <Typography
            variant="overline"
            className="font-semibold text-base tracking-widest mb-4 block"
            sx={{
              color: 'secondary.main',
            }}
          >
            Nuestras Soluciones
          </Typography>
          <GradientTitle
            as="h2"
            className="mb-6 text-center"
          >
            Servicios especializados para tu empresa
          </GradientTitle>
          <Typography
            variant="h6"
            className="max-w-2xl mx-auto font-normal"
            sx={{
              color: 'text.secondary',
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
      </div>
    </section>
  );
}
