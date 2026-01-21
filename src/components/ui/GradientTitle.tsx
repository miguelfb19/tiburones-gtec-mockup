import { Typography, TypographyProps, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface GradientTitleProps extends Omit<TypographyProps, "children"> {
  readonly children: ReactNode;
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function GradientTitle({
  children,
  as = "h2",
  sx = {},
  ...props
}: GradientTitleProps) {
  
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Typography
      variant={as}
      className="font-bold"
      sx={{
        background: isDark ? "linear-gradient(135deg, white 0%, #2bc2fe 100%)" : "linear-gradient(135deg, #2B4F7C 0%, #2bc2fe 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textShadow: "0 4px 12px rgba(43, 79, 124, 0.2)",
        filter: "drop-shadow(0 2px 4px rgba(43, 194, 254, 0.15))",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
