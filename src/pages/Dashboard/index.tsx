import React from "react";
import { Customer } from "../../components/Customer";
import { CustomerHandler } from "../../components/CustomerHandler";
import { Header } from "../../components/Header";
import { Headline } from "../../components/Headline";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <Container>
            <Header />
            <Content>
                <Headline />
                <CustomerHandler
                    title="Listagem de usuários"
                    subtitle="Escolha um cliente para visualizar os detalhes"
                    isCreate
                />

                <Customer />
            </Content>
        </Container>
    );
};

export { Dashboard };
