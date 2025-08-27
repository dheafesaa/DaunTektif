import { Typography, Stack, SxProps, Theme } from "@mui/material";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  titleColor?: string;
  subtitleColor?: string;
  sx?: SxProps<Theme>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  description,
  titleColor = "primary",
  subtitleColor = "secondary",
  sx,
}) => (
  <Stack gap={3}>
    <Stack spacing={1} alignItems="center" textAlign="center" sx={sx}>
      <Typography variant="h4" color={titleColor}>
        {title}
      </Typography>
      <Typography
        variant="h5"
        color={subtitleColor}
        sx={{ whiteSpace: "pre-line" }}
      >
        {subtitle}
      </Typography>
    </Stack>
    {description && (
      <Typography variant="body1" textAlign="justify">
        {description}
      </Typography>
    )}
  </Stack>
);

export default HeroSection;
