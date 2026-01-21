'use client';

import { Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@/components/ui/Button';
import { GradientTitle } from '@/components/ui/GradientTitle';

export function CTA() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <section className={`relative overflow-hidden py-16 md:py-24 ${isDark ? 'bg-[#0a0a0a]' : 'bg-white'}`}>
      <div
        className="absolute inset-0 opacity-5"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center gap-5"
        >
          <GradientTitle
            as="h2"
            className="mb-8 text-center"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            ¿Listo para transformar tu empresa?
          </GradientTitle>
          <Typography
            variant="h6"
            className="mb-12 text-gray-600 max-w-xl mx-auto font-normal text-center"
          >
            Únete a las empresas que ya confían en nosotros como su partner tecnológico de Google
          </Typography>
          <div className="flex gap-6 justify-center flex-wrap mb-12">
            <Button
              variant="solid"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Solicitar una demo
            </Button>
            <Button
              variant="outline"
              size="large"
            >
              Hablar con un experto
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 pt-12 border-t border-gray-200 flex justify-center gap-16 flex-wrap">
            {[
              { number: '500+', label: 'Clientes satisfechos' },
              { number: '5+', label: 'Años como Google Partner' },
              { number: '99.9%', label: 'Uptime garantizado' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Typography
                  variant="h3"
                  className="font-bold text-secondary mb-2"
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-gray-600"
                >
                  {stat.label}
                </Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
