import { Box, Typography, Dialog, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../atoms/button";
import HeroSection from "../organisms/hero-section";

interface PopupPredictionProps {
  open: boolean;
  onClose: () => void;
  onRetry: () => void;
  result: {
    imageUrl: string;
    className: string;
    confidence: string;
    description: string;
    prevention: string[];
    treatment: string[];
  };
}

const PopupPrediction: React.FC<PopupPredictionProps> = ({
  open,
  onClose,
  onRetry,
  result,
}) => {
  if (!result) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      slotProps={{
        paper: { sx: { borderRadius: 3, px: { xs: 4, md: 6 }, py: 4, gap: 5 } },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 12,
        }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <HeroSection
        title="Hasil Analisis Daun"
        subtitle="Berikut hasil analisis otomatis dari gambar daun yang kamu unggah"
      />
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Box
          component="img"
          src={result.imageUrl}
          alt="Leaf preview"
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 260 },
            borderRadius: 3,
          }}
        />
        <Stack gap={2}>
          <Typography variant="body2" textAlign="justify">
            Daun teridentifikasi sebagai <b>{result.className}</b> dengan
            akurasi <b>{result.confidence}</b>
            <br />
            {result.description}
          </Typography>
          <Typography variant="body2">
            Tips Penanganan
            <ol style={{ margin: 0 }}>
              {result.treatment.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </Typography>
          <Typography variant="body2">
            Rekomendasi Pencegahan
            <ul style={{ margin: 0 }}>
              {result.prevention.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Typography>
        </Stack>
      </Stack>
      <CustomButton fullWidth label="Prediksi Ulang" onClick={onRetry} />
    </Dialog>
  );
};

export default PopupPrediction;
