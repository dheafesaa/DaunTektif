import React from "react";
import { Stack } from "@mui/material";
import HeroSection from "../../components/organisms/hero-section";
import UploadImagePredict from "../../components/molecules/upload-image";
import PopupPrediction from "../../components/molecules/popup-prediction";

const Analyze = () => {
  const [loading, setLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [result, setResult] = React.useState<any>(null);
  const [resetKey, setResetKey] = React.useState(0);

  React.useEffect(() => {
    return () => {
      if (result?.imageUrl) {
        URL.revokeObjectURL(result.imageUrl);
      }
    };
  }, [result]);

  const handlePredict = async (file: File) => {
    setLoading(true);
    const previewUrl = URL.createObjectURL(file);

    const formData = new FormData();
    formData.append("file", file);

    const delay = new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      const [response] = await Promise.all([
        fetch("http://localhost:8000/predict", {
          method: "POST",
          body: formData,
        }),
        delay,
      ]);

      if (!response.ok) throw new Error("Gagal memproses gambar.");
      const data = await response.json();

      setResult({
        imageUrl: previewUrl,
        className: data.class,
        confidence: data.confidence,
        description: data.description,
        prevention: data.prevention,
        treatment: data.treatment,
      });
      setModalOpen(true);
    } catch (e) {
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    setModalOpen(false);
    setResult(null);
    setResetKey((prev) => prev + 1);
  };

  return (
    <Stack p={{ xs: 4, md: 8 }} gap={5} alignItems="center">
      <HeroSection
        title="Analisis Instan Dalam Satu Langkah"
        subtitle="Yuk, unggah daunmu sekarang untuk panen yang lebih pasti!"
      />
      <UploadImagePredict
        key={resetKey}
        loading={loading}
        onPredict={handlePredict}
      />
      <PopupPrediction
        open={modalOpen}
        onClose={handleRetry}
        onRetry={handleRetry}
        result={result}
      />
    </Stack>
  );
};

export default Analyze;
