'use client';

import { Typography, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionaries';

interface FooterProps {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export function Footer({ dict }: FooterProps) {
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
              {dict.footer.about}
            </Typography>
          </div>

          {/* Soluciones */}
          <div>
            <Typography variant="h6" className='mb-4! font-semibold' color='text.primary'>
              {dict.footer.solutions}
            </Typography>
            <ul className="space-y-2">
              <li>
                <Typography variant="body2" color="text.secondary">
                  {dict.services.modernization.title}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  {dict.services.workspace.title}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  {dict.services.ai.title}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  {dict.services.analytics.title}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="text.secondary">
                  {dict.services.managed.title}
                </Typography>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <Typography variant="h6" className='mb-4! font-semibold' color='text.primary'>
              {dict.footer.contact}
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
            © {currentYear} GTEC. {dict.footer.rights}
          </Typography>
        </div>
      </div>
    </footer>
  );
}
