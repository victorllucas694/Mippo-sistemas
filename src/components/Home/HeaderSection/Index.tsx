import { Button } from "@mui/material";
import { HeaderSectionWrapper } from "./styles";

function HeaderSection() {
  return (
    <HeaderSectionWrapper>
      <h1>
        Seja bem vindo(a) à <br />
        Mippo Sistemas
      </h1>
      <p>
        Criamos seu sistema/projeto de forma <br /> rápida e eficiente para sua
        empresa
      </p>
      <Button
        sx={{
          width: "15rem",
          height: "2.8rem",
          position: "absolute",
          margin: "28rem 8rem",
          "@media (max-width: 1033px)": {
            display: "none",
          }
        }}
        variant="contained"
      >
        Fazer orçamento
      </Button>
      <div className="img-data">
        <img
          src="https://img.freepik.com/fotos-gratis/world-global-cartography-globalization-earth-international-concept_53876-128043.jpg?t=st=1733078485~exp=1733082085~hmac=1ccc8d1bcc0845a1748f15648ded8ff075915db93859290c881b69ba9e2e1044&w=1800"
          alt=""
        />
      </div>
    </HeaderSectionWrapper>
  );
}

export default HeaderSection;
