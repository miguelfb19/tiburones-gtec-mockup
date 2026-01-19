'use client';

import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: 'primary' | 'secondary' | 'tertiary';
  delay?: number;
}

export function ServiceCard({ title, description, icon, color, delay = 0 }: ServiceCardProps) {
  const colorMap = {
    primary: {
      bg: 'rgba(43, 79, 124, 0.05)',
      border: '#2B4F7C',
      iconBg: '#2B4F7C',
    },
    secondary: {
      bg: 'rgba(43, 194, 254, 0.05)',
      border: '#2bc2fe',
      iconBg: '#2bc2fe',
    },
    tertiary: {
      bg: 'rgba(228, 0, 92, 0.05)',
      border: '#e4005c',
      iconBg: '#e4005c',
    },
  };

  const selectedColor = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <Card
        sx={{
          height: '100%',
          border: `2px solid transparent`,
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: selectedColor.border,
            boxShadow: `0 12px 32px ${selectedColor.border}20`,
          },
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 2,
              backgroundColor: selectedColor.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 3,
              color: 'white',
            }}
          >
            {icon}
          </Box>
          
          <Typography 
            variant="h5" 
            component="h3" 
            sx={{ 
              mb: 2,
              fontWeight: 600,
              color: selectedColor.iconBg,
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{ lineHeight: 1.7 }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
}
