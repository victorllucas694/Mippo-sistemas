import { Button } from "@mui/material";
import { AboutInfoContainer } from "./styles";
import Aboutmerafiki from "./Website Creator-rafiki.png";

function AboutInfo() {
  return (
    <AboutInfoContainer>
      <div className="box-about">
        <img src={Aboutmerafiki} alt="" />
      </div>
      <div className="box-about">
        <h1>Quem somos?</h1>
        <p>
          Somos uma empresa jovem e inovadora, em fase inicial, dedicada ao
          desenvolvimento de soluções de software que transformam ideias em
          realidades digitais. Nosso objetivo é atender às necessidades de
          empresas e indivíduos, oferecendo produtos e serviços que combinam
          tecnologia de ponta, design intuitivo e alto desempenho. Nossa Missão
          Nossa missão é capacitar empresas e pessoas com ferramentas digitais
          que aumentem sua eficiência, melhorem seus processos e proporcionem
          experiências excepcionais. Acreditamos que a tecnologia é um meio
          poderoso para impulsionar mudanças positivas e promover a inovação.
        </p>

        <Button
          sx={{
            width: "18rem",
            height: "2.8rem",
            margin: "3rem 4rem",
            "@media (max-width: 1033px)": {
              width: "15rem",
            },
          }}
          variant="contained"
        >
          Ver mais informações
        </Button>
      </div>
    </AboutInfoContainer>
  );
}

export default AboutInfo;
