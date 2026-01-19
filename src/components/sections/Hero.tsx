'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function Hero() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '40%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43, 194, 254, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '-5%',
          left: '-5%',
          width: '35%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(43, 79, 124, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Box sx={{ mb: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'secondary.main',
                    fontWeight: 600,
                    fontSize: '1rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  Google Cloud Partner
                </Typography>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #2B4F7C 0%, #2bc2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Transformamos tu negocio con tecnología Google
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Soluciones empresariales de vanguardia para impulsar tu transformación digital
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Conoce nuestras soluciones
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1.5 }}
              >
                Contacto
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="!my-8 flex flex-wrap gap-6 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                  G
                </div>
                <div>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
                    Google Partner
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Oficial
                  </Typography>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tertiary to-tertiary-light flex items-center justify-center text-white font-bold text-sm">
                  5+
                </div>
                <div>
                  <Typography variant="caption" display="block" sx={{ fontWeight: 600 }}>
                    Great Place to Work
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Años consecutivos
                  </Typography>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxWidth: 500,
                aspectRatio: '1/1',
              }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="GTEC"
                  width={400}
                  height={150}
                  className="object-contain opacity-20"
                />
              </motion.div>
              
              {/* Floating cards */}
              {[
                { color: '#2B4F7C', delay: 0, x: -80, y: -60 },
                { color: '#2bc2fe', delay: 0.5, x: 80, y: -40 },
                { color: '#e4005c', delay: 1, x: -60, y: 80 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item.delay + 0.6 }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${item.x}px), calc(-50% + ${item.y}px))`,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      backgroundColor: item.color,
                      boxShadow: `0 8px 24px ${item.color}40`,
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </div>
      </Container>
    </Box>
  );
}
