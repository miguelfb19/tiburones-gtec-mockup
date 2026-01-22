'use client';

import { Typography, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <footer className={`mt-16 p-10 border-t ${
      isDark 
        ? 'bg-[#1a1a1a] border-[rgba(255,255,255,0.12)]' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Logo and About */}
          <div>
            <Image
              src="/images/logo.png"
              alt="GTEC Logo"
              width={120}
              height={40}
              className="object-contain mb-4"
              style={{ filter: isDark ? 'brightness(0) invert(1)' : 'none' }}
            />
            <Typography variant="body2" color="text.secondary" className="mb-4">
              Partner oficial de Google con más de 5 años de reconocimiento como Great Place to Work.
            </Typography>
          </div>

          {/* Soluciones */}
          <div>
            <Typography variant="h6" className='mb-4! font-semibold' color='text.primary'>
              Soluciones
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography variant="body2" color="text.secondary">
                  Modernización Digital
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Google Workspace
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  IA Generativa
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Analítica de Datos
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  Servicios Administrados
                </Typography>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <Typography variant="h6" className='mb-4! font-semibold' color='text.primary'>
              Contacto
            </Typography>
            <div className="flex gap-2 mb-4">
              <IconButton 
                size="small" 
                sx={{ 
                  color: 'primary.main',
                  '&:hover': { backgroundColor: 'rgba(43, 79, 124, 0.08)' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'secondary.main',
                  '&:hover': { backgroundColor: 'rgba(43, 194, 254, 0.08)' }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'error.main',
                  '&:hover': { backgroundColor: 'rgba(228, 0, 92, 0.08)' }
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton 
                size="small"
                sx={{ 
                  color: 'error.main',
                  '&:hover': { backgroundColor: 'rgba(228, 0, 92, 0.08)' }
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: 'primary.main',
                  '&:hover': { backgroundColor: 'rgba(43, 79, 124, 0.08)' }
                }}
              >
                <FacebookIcon />
              </IconButton>
            </div>
            <Typography variant="body2" color="text.secondary">
              info@gtec.com.mx
            </Typography>
          </div>
        </div>

        {/* Copyright */}
        <div className={`pt-6 border-t ${
          isDark ? 'border-[rgba(255,255,255,0.12)]' : 'border-gray-200'
        }`}>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            © {currentYear} GTEC. Todos los derechos reservados.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
