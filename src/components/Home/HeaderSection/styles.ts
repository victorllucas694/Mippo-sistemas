import styled from "styled-components";

export const HeaderSectionWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  
  h1{
    position: absolute;
    margin: 10rem 8rem;
    color: white;
    font-size: 4rem;
    
    @media(max-width: 1033px) {
      display: none;
    }
  }

  p {
    position: absolute;
    margin: 22rem 8rem;
    color: white;
    font-size: 1.5rem;

    @media(max-width: 1033px) {
      display: none;
    }
    }

  .img-data {
    width: 100%;
    overflow: hidden;
    height: auto;
    max-height: 40rem;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;
