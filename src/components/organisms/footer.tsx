import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    width="100%"
    textAlign="center"
    bgcolor="#00393B"
    color="white"
    mt="auto"
    py={2}
  >
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Dhea Fesa Athallah. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
