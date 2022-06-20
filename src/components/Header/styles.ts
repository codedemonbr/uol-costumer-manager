import styled from "styled-components";

export const Container = styled.div`
    align-items: center;
    justify-content: center;
    background: var(--darker);
    height: 4rem;

    img {
        resize: both;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
