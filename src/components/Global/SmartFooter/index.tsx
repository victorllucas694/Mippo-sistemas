import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

interface StyledProps {
  darkMode: boolean;
}

const StyledFooter = styled(Box)<StyledProps>(({ theme, darkMode }) => ({
  padding: theme.spacing(6, 0),
  color: darkMode ? "#fff" : "#333",
  transition: "all 0.3s ease-in-out",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  position: "relative",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
  },
}));

const SocialButton = styled(IconButton)<StyledProps>(({ theme, darkMode }) => ({
  margin: theme.spacing(0, 1),
  color: darkMode ? "#fff" : "#333",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    color: "#7c4dff",
  },
  "&:focus": {
    outline: "2px solid #7c4dff",
    outlineOffset: "2px",
  },
}));

const FooterLink = styled(Link)<StyledProps>(({ darkMode }) => ({
  color: darkMode ? "#fff" : "#333",
  textDecoration: "none",
  transition: "color 0.2s ease",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    width: 0,
    height: "2px",
    background: "#7c4dff",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  "&:hover": {
    color: "#7c4dff",
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "translateX(5px)",
  },
}));

const SmartFooter: React.FC = () => {
  const [darkMode] = useState<boolean>(false);


  return (
    <StyledFooter darkMode={darkMode}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Quem somos?
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Somos uma empresa jovem e inovadora, em fase inicial, dedicada ao
              desenvolvimento de soluções de software que transformam ideias em
              realidades digitais.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Plataforma
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <FooterLink href="#" darkMode={darkMode}>
                Home
              </FooterLink>
              <FooterLink href="#" darkMode={darkMode}>
                serviços
              </FooterLink>
              <FooterLink href="#" darkMode={darkMode}>
                Contato
              </FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Informações de contato
            </Typography>
            <ContactItem>
              <MdLocationOn style={{ marginRight: "8px" }} />
              <Typography variant="body2">
                Santa Barbara D'Oeste, São Paulo
              </Typography>
            </ContactItem>
            <ContactItem>
              <MdPhone style={{ marginRight: "8px" }} />
              <Typography variant="body2">19 98427-7203</Typography>
            </ContactItem>
            <ContactItem>
              <MdEmail style={{ marginRight: "8px" }} />
              <Typography variant="body2">victorllucas.silva01@gmail.com</Typography>
            </ContactItem>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
              Veja mais 
            </Typography>
            <Box>
              <Tooltip title="Facebook" arrow>
                <SocialButton aria-label="facebook" darkMode={darkMode}>
                  <FaFacebook />
                </SocialButton>
              </Tooltip>
              <Tooltip title="Twitter" arrow>
                <SocialButton aria-label="twitter" darkMode={darkMode}>
                  <FaTwitter />
                </SocialButton>
              </Tooltip>
              <Tooltip title="Instagram" arrow>
                <SocialButton aria-label="instagram" darkMode={darkMode}>
                  <FaInstagram />
                </SocialButton>
              </Tooltip>
              <Tooltip title="LinkedIn" arrow>
                <SocialButton aria-label="linkedin" darkMode={darkMode}>
                  <FaLinkedin />
                </SocialButton>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: "1px solid",
            borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Mippo sistemas.
          </Typography>
        </Box>
      </Container>
    </StyledFooter>
  );
};

export default SmartFooter;
