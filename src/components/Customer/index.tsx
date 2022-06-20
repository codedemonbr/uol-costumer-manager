import React from "react";

import {
    ButtonContent,
    Container,
    CpfNumberContent,
    LeftContent,
    NameEmailContent,
    StatusContent,
} from "./styles";

const Customer: React.FC = () => {
    return (
        <Container>
            <LeftContent>
                <NameEmailContent>
                    <h4>Camila Souza</h4>
                    <p>camila.souza@gmail.com</p>
                </NameEmailContent>
                <CpfNumberContent>
                    <h4>512.512.512-66</h4>
                    <p>(11) 98603-6845</p>
                </CpfNumberContent>
                <StatusContent>
                    <div></div>
                    <p>Ativo</p>
                </StatusContent>
            </LeftContent>
            <ButtonContent>
                <button>Editar</button>
            </ButtonContent>
        </Container>
    );
};

export { Customer };
