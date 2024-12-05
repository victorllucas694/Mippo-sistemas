import styled from "styled-components";

export const AboutInfoContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 40rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;

    .box-about{
        min-width: 20rem;
        width: 40%;
        height: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;

        img {
            margin: auto;
            max-width: 90%;
            height: auto;
            object-fit: cover;
        }

        h1 {
            margin: 3rem 4rem;
            font-family: 'Roboto';
            font-weight: 400;

            @media(max-width: 1077px) {
                margin: 1rem 1rem;
            }
        }

        p {
            margin: 1rem 4rem;
            font-family: 'Roboto';
            color: rgb(130,130,130);
            font-weight: 400;
            font-size: 1.1rem;
            @media(max-width: 1077px) {
                margin: 1rem 1rem;
            }
        }
    }
`;