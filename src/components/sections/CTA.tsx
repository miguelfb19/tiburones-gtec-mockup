'use client';

import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Typography
            variant="h2"
            className="mb-6 font-bold text-white"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            ¿Listo para transformar tu empresa?
          </Typography>
          <Typography
            variant="h6"
            className="mb-10 text-white/90 max-w-xl mx-auto font-normal"
          >
            Únete a las empresas que ya confían en nosotros como su partner tecnológico de Google
          </Typography>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              variant="solid"
              size="large"
              endIcon={<ArrowForwardIcon />}
              className="bg-white text-primary hover:bg-white/90"
            >
              Solicitar una demo
            </Button>
            <Button
              variant="outline"
              size="large"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Hablar con un experto
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/20 flex justify-center gap-16 flex-wrap">
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
                  className="font-bold text-[#2bc2fe] mb-2"
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  className="text-white/80"
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
