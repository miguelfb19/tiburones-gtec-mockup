import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getDictionary } from "@/lib/dictionaries";

interface Props {
  readonly dict: Awaited<ReturnType<typeof getDictionary>>;
}

export const ContactItems = ({ dict }: Props) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <div className="space-y-6">
      <motion.div
        whileHover={{ x: 10 }}
        transition={{ ease: "linear", duration: 0.2 }}
        className={`flex items-start gap-4 p-4 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
      >
        <div className="shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <EmailIcon className="text-white" />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            className={`font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {dict.contactPage.contacts.emailLabel}
          </Typography>
          <Typography
            variant="body2"
            className={isDark ? "text-gray-300" : "text-gray-600"}
          >
            contacto@gtec.com
          </Typography>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ x: 10 }}
        transition={{ ease: "linear", duration: 0.2 }}
        className={`flex items-start gap-4 p-4 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
      >
        <div className="shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <PhoneIcon className="text-white" />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            className={`font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {dict.contactPage.contacts.phoneLabel}
          </Typography>
          <Typography
            variant="body2"
            className={isDark ? "text-gray-300" : "text-gray-600"}
          >
            +1 (555) 123-4567
          </Typography>
        </div>
      </motion.div>

      <motion.div
        whileHover={{ x: 10 }}
        transition={{ ease: "linear", duration: 0.2 }}
        className={`flex items-start gap-4 p-4 rounded-lg ${isDark ? "bg-white/5 hover:bg-white/10" : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
      >
        <div className="shrink-0 mt-1">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center">
            <LocationOnIcon className="text-white" />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            className={`font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {dict.contactPage.contacts.locationLabel}
          </Typography>
          <Typography
            variant="body2"
            className={isDark ? "text-gray-300" : "text-gray-600"}
          >
            {dict.contactPage.contacts.addressValue}
          </Typography>
        </div>
      </motion.div>
    </div>
  );
};
