import React from "react";
import { CustomerHandler } from "../../components/CustomerHandler";
import { Header } from "../../components/Header";
import { Headline } from "../../components/Headline";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header />
            <Headline />
            <CustomerHandler
                title="Listagem de usuários"
                subtitle="Escolha um cliente para visualizar os detalhes"
                isCreate
            />
        </Container>
    );
};

export { Dashboard };
