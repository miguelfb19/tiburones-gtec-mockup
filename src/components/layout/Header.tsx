'use client';

import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Toolbar, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

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
              variant="ghost"
              size="medium"
            >
              Soluciones
            </Button>
            <Button 
              variant="ghost"
              size="medium"
            >
              Nosotros
            </Button>
            <Button 
              variant="solid"
              size="medium"
              className="ml-4"
            >
              Contacto
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
