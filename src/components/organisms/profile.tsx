import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Profile = ({
  src,
  name,
  role,
  linkedin,
  github,
  email,
}: {
  src: string;
  name: string;
  role?: string;
  linkedin?: string;
  github?: string;
  email?: string;
}) => (
  <Card sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
    <CardContent
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Avatar src={src} alt={name} sx={{ width: 180, height: 180, mb: 2 }} />
      <Typography variant="body1" fontWeight={600}>
        {name}
      </Typography>
      {role && <Typography variant="body2">{role}</Typography>}
      <Box display="flex" gap={1} mt={2}>
        {linkedin && (
          <IconButton
            component="a"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        )}
        {github && (
          <IconButton
            component="a"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
        )}
        {email && (
          <IconButton component="a" href={`mailto:${email}`} aria-label="Email">
            <EmailIcon fontSize="medium" />
          </IconButton>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default Profile;
