import { Stack } from "@mui/material";
import HomeIllustration from "../../assets/home-illustration.png";
import CustomButton from "../../components/atoms/button";
import HeroSection from "../../components/organisms/hero-section";
import ImageOverlay from "../../components/molecules/image-overlay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Stack
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="space-between"
      direction={{ xs: "column", md: "row" }}
    >
      <Stack flex={1} alignItems="center">
        <ImageOverlay
          src={HomeIllustration}
          alt="Home Illustration"
          text="DaunTektif"
        />
      </Stack>
      <Stack flex={1} alignItems="center" p={{ xs: 4, md: 8 }} gap={5}>
        <HeroSection
          title="Selamat Datang"
          subtitle={"Temukan solusi daun sehat hanya\ndalam satu klik"}
          description="DaunTektif siap membantu kamu untuk mendeteksi penyakit daun jagung
          hanya dengan mengunggah foto. Aplikasi ini dilengkapi teknologi
          kecerdasan buatan untuk mengenali gejala penyakit daun secara cepat,
          akurat, dan praktis. Kini, menjaga kesehatan tanaman dan meningkatkan
          hasil panen jadi lebih mudah."
        />
        <CustomButton
          label="Mulai Deteksi"
          onClick={() => navigate("/analyze")}
        />
      </Stack>
    </Stack>
  );
};

export default Home;
