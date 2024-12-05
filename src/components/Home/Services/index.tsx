import { ServicesBox } from "./styles";
import { ReactNode } from "react";
import BuildIcon from "@mui/icons-material/Build";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

interface IBoxServices {
  icon: ReactNode;
  title: string;
  label: string;
}

function Services() {
  const boxServices: IBoxServices[] = [
    {
      icon: (
        <BuildIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "Desenvolvimento Web",
      label:
        "Desenvolvemos sua plataforma web de forma rápida e eficiente para sua empresa",
    },
    {
      icon: (
        <ContactSupportIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "Suporte Online",
      label:
        "Tenha suporte online sobre sua plataforma, e consiga o melhor atendimento sobre o desenvolvimento de seus sistema",
    },
    {
      icon: (
        <OnlinePredictionIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "Consultoria online",
      label:
        "Adaptamos sua aplicação da forma que desejar, além de desenvolvermos a melhor solução para o seu negócio",
    },
    {
      icon: (
        <GridViewIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "Desenvolvimento Front-end",
      label:
        "Desenvolvemos sua plataforma front-end de forma rápida e eficiente para sua empresa. Interfaces visuais interativas e responsivas, garantindo boa experiência do usuário (UX/UI).",
    },
    {
      icon: (
        <SettingsSuggestIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "Desenvolvimento back-end",
      label:
        "Desenvolvemos sua API de forma rápida e eficiente para sua empresa.Desenvolvimento de servidores, bancos de dados e lógica de negócios",
    },
    {
      icon: (
        <DesignServicesIcon
          sx={{ width: "2.5rem", height: "2.5rem", color: "rgb(120,120,120)" }}
        />
      ),
      title: "UI/UX online",
      label:
        "Design responsivo: Criação de websites adaptáveis a diferentes dispositivos e resoluções. Desenvolvimento de protótipos para validação de ideias e funcionalidades.",
    },
  ];

  return (
    <ServicesBox>
      <h1>Serviços</h1>
      <h2>Um pouco mais sobre os nossos serviços</h2>

      <div className="box-servies-data">
        {boxServices.map((services: IBoxServices) => {
          return (
            <div className="items-services">
              <div className="circle-icon">{services.icon}</div>
            
                <div className="box-text">
                    <h1>{services.title}</h1>
                    <p>{services.label}</p>
                </div>
            </div>
          );
        })}
      </div>
    </ServicesBox>
  );
}

export default Services;
