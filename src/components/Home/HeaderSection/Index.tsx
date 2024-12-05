import { Button } from "@mui/material";
import { HeaderSectionWrapper } from "./styles";
import image from 'world-global-cartography-globalization-earth-international-concept.jpg'

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
          src={image}
          alt=""
        />
      </div>
    </HeaderSectionWrapper>
  );
}

export default HeaderSection;
