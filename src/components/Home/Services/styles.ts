import styled from "styled-components";

export const ServicesBox = styled.div`
    width: 100%;
    height: auto;
    min-height: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4rem 0;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;

    h1 {
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 1.4rem;
        color: rgb(80,80,80);
    }

    h2 {
        font-family: 'Open Sans';
        font-weight: 400;
        font-size: 2rem;
        margin: 1rem 0;
        color: black;
    }

    .box-servies-data {
        width: 100%;
        max-width: 1980px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;

        .items-services {
            max-width: 30rem;
            min-width: 20rem;
            width: 25%;
            border-radius: 15px;
            height: 18rem;
            padding: 3rem;
            cursor: pointer;

            &:hover {
                background-color: rgb(245, 245, 245);
                transition: .7s;
            }

            .circle-icon {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 5rem;
                height: 5rem;
                border-radius: 5rem;
            }

            .box-text {
                width: 100%;
                height: 8rem;
                margin: 0rem 0;

                p {
                    font-family: 'Roboto';
                    font-size: 1rem;
                    margin: 1rem 0;
                }
            }
        }
    }
`;