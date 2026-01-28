import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { Alert, TextField, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

import { getDictionary } from "@/lib/dictionaries";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export const Form = ({ dict }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simular envío (aquí integrarías tu API)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });

    // Resetear mensaje de éxito después de 5 segundos
    setTimeout(() => setSubmitted(false), 5000);
  };
  return (
    <FadeIn delay={0.3}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`p-8 rounded-2xl ${isDark ? "bg-white/5 backdrop-blur-sm border border-white/10" : "bg-white shadow-xl border border-gray-200"}`}
      >
        {submitted && (
          <Alert severity="success" className="mb-6">
            {dict.contactPage.form.successMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            fullWidth
            label={dict.contactPage.form.nameLabel}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "white",
                "& fieldset": {
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiInputBase-input": {
                color: isDark ? "white" : "black",
              },
            }}
          />

          <TextField
            fullWidth
            label={dict.contactPage.form.emailLabel}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "white",
                "& fieldset": {
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiInputBase-input": {
                color: isDark ? "white" : "black",
              },
            }}
          />

          <TextField
            fullWidth
            label={dict.contactPage.form.companyLabel}
            name="company"
            value={formData.company}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "white",
                "& fieldset": {
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiInputBase-input": {
                color: isDark ? "white" : "black",
              },
            }}
          />

          <TextField
            fullWidth
            label={dict.contactPage.form.phoneLabel}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "white",
                "& fieldset": {
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiInputBase-input": {
                color: isDark ? "white" : "black",
              },
            }}
          />

          <TextField
            fullWidth
            label={dict.contactPage.form.messageLabel}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: isDark ? "rgba(255, 255, 255, 0.05)" : "white",
                "& fieldset": {
                  borderColor: isDark
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(0, 0, 0, 0.23)",
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.secondary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: isDark
                  ? "rgba(255, 255, 255, 0.7)"
                  : "rgba(0, 0, 0, 0.6)",
              },
              "& .MuiInputBase-input": {
                color: isDark ? "white" : "black",
              },
            }}
          />

          <Button
            type="submit"
            variant="solid"
            size="large"
            fullWidth
            disabled={loading}
            endIcon={<SendIcon />}
          >
            {loading ? dict.contactPage.form.sendingButton : dict.contactPage.form.sendButton}
          </Button>
        </form>
      </motion.div>
    </FadeIn>
  );
};
