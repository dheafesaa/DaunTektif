import { Box, Typography } from "@mui/material";

interface ImageOverlayProps {
  src: string;
  alt?: string;
  text?: string;
}

const ImageOverlay: React.FC<ImageOverlayProps> = ({ src, alt, text }) => (
  <Box position="relative" width="100%" zIndex={1300}>
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        maxHeight: "100vh",
        display: "block",
        objectFit: "cover",
      }}
    />
    {text && (
      <Box
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" color="white">
          {text}
        </Typography>
      </Box>
    )}
  </Box>
);

export default ImageOverlay;
