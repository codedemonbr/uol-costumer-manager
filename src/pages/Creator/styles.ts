import { Form } from "@unform/web";
import styled from "styled-components";

export const Container = styled.div`
    @media (min-width: 1080px) {
        padding: 0 12rem;
    }
`;

export const FormContainer = styled(Form)``;

export const BtnContent = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`;
