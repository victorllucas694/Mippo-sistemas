import { ContactContainer } from "./styles";
import Contactusrafiki from "./Contact us-rafiki.png";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import { Button } from "@mui/material";

function Contact() {
  return (
    <ContactContainer>
      <h1>Contato</h1>
      <h2>Entre em contato para mais informações</h2>
      <div className="box-form">
        <div className="locale">
          <img src={Contactusrafiki} alt="" />
        </div>
        <div className="form-contact">
          <Input
            sx={{ width: "100%", height: "2.8rem" }}
            placeholder="Empresa"
          />
          <Input sx={{ width: "100%", height: "2.8rem" }} placeholder="Nome" />
          <Input sx={{ width: "100%", height: "2.8rem" }} placeholder="Email" />
          <Input
            sx={{ width: "100%", height: "2.8rem" }}
            placeholder="Telefone"
          />
          <Textarea
            placeholder="Mensagem"
            minRows={2}
            sx={{
              width: "100%",
              height: "6rem",
              "--Textarea-focusedInset": "var(--any, )",
              "--Textarea-focusedThickness": "0.25rem",
              "--Textarea-focusedHighlight": "rgba(13,110,253,.25)",
              "&::before": {
                transition: "box-shadow .15s ease-in-out",
              },
              "&:focus-within": {
                borderColor: "#86b7fe",
              },
            }}
          />
          <Button
            sx={{
              width: "100%",
              height: "3rem",
            }}
            variant="contained"
          >
            Enviar
          </Button>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
