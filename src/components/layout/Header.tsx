'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/logo.png"
                alt="GTEC Logo"
                width={140}
                height={50}
                priority
                className="object-contain"
              />
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Button 
              color="primary"
              sx={{ 
                fontWeight: 500,
                px: 2.5,
                '&:hover': {
                  backgroundColor: 'rgba(43, 79, 124, 0.08)',
                }
              }}
            >
              Soluciones
            </Button>
            <Button 
              color="primary"
              sx={{ 
                fontWeight: 500,
                px: 2.5,
                '&:hover': {
                  backgroundColor: 'rgba(43, 79, 124, 0.08)',
                }
              }}
            >
              Nosotros
            </Button>
            <Button 

              variant="contained"
              color="primary"
              sx={{ 
                ml: 2,
                px: 3,
              }}
            >
              Contacto
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
