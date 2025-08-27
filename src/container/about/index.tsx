import { Box, Stack, Typography } from "@mui/material";
import HeroSection from "../../components/organisms/hero-section";
import AboutIllustration from "../../assets/about-illustration.png";

const About = () => {
  return (
    <Stack p={{ xs: 4, md: 8 }} gap={5} alignItems="center">
      <HeroSection
        title="Tentang DaunTektif"
        subtitle="Daun Sehat, Panen Hebat"
      />
      <Box
        component="img"
        src={AboutIllustration}
        alt="About Illustration"
        sx={{
          width: "100%",
          maxWidth: 400,
        }}
      />
      <Typography variant="body1" textAlign="justify">
        DaunTektif hadir sebagai solusi inovatif untuk mendukung pertanian
        modern di Indonesia. Berbasis kecerdasan buatan, aplikasi ini
        dikembangkan khusus untuk membantu para petani dan akademisi dalam
        mengenali serta mengatasi penyakit daun jagung secara cepat dan akurat.
        Dengan DaunTektif, proses identifikasi penyakit daun menjadi lebih
        mudah, efisien, dan dapat diandalkan sebagai pendamping terpercaya baik
        di lapangan maupun dalam kegiatan penelitian. Creator menjembatani
        kebutuhan praktis petani dan dukungan analisis ilmiah bagi akademisi,
        sehingga kesehatan tanaman dapat terjaga optimal.
      </Typography>
    </Stack>
  );
};

export default About;
