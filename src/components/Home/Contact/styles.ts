import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.4rem;
    color: rgb(90, 90, 90);
  }

  h2 {
    font-family: "Roboto";
    font-weight: 400;
    margin: 1rem 0;
    font-size: 1.8rem;
  }

  .box-form {
    display: flex;
    width: 100%;
    height: auto;
    min-height: 35rem;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;

    .locale {
      width: 20%;
      min-width: 20rem;
      height: 28rem;
      padding: 2rem;
      border-radius: 10px;
      background-color: rgb(250, 250, 250);

      img {
        max-width: 100%;
        height: auto;
        object-fit: contain;
      }
    }

    .form-contact {
      border-radius: 10px;
      width: 50%;
      min-width: 40rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      height: 28rem;

      @media(max-width: 780px ) {
        min-width: 20rem;
        width: 90%;
      }
    }
  }
`;
