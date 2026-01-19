'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { theme } from '@/theme/muiTheme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}
