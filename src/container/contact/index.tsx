import { Stack } from "@mui/material";
import HeroSection from "../../components/organisms/hero-section";
import Profile from "../../components/organisms/profile";
import ProfileImg from "../../assets/profile-image.jpeg";
const Contact = () => {
  return (
    <Stack p={{ xs: 4, md: 8 }} gap={5} alignItems="center">
      <HeroSection
        title="The Creator"
        subtitle="Terbuka untuk Diskusi & Kolaborasi"
        description="Jika kamu memiliki pertanyaan atau ingin berbagi pengalaman terkait
        aplikasi DaunTektif. Saran dan masukan yang diberikan sangat berarti
        untuk pengembangan fitur dan peningkatan kualitas aplikasi ke depannya.
        Saya juga terbuka untuk kolaborasi penelitian atau inovasi bersama di
        bidang pertanian digital. Jangan ragu untuk menghubungi saya kapan saja
        dan mari wujudkan pertanian yang lebih cerdas dan berkelanjutan di
        Indonesia."
      />
      <Profile
        src={ProfileImg}
        name="Dhea Fesa Athallah"
        role="Frontend Developer"
        linkedin="https://www.linkedin.com/in/dheafesa/"
        github="https://github.com/dheafesaa"
        email="depsaaa0823@gmail.com"
      />
    </Stack>
  );
};

export default Contact;
