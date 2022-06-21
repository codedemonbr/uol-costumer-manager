import { FormHandles } from "@unform/core";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { CustomerHandler } from "../../components/CustomerHandler";
import { CustomSelect } from "../../components/CustomSelect";
import Input from "../../components/Input";
import { customerStatus } from "../../constants/customerStatus";
import { BtnContent, Container, FormContainer } from "./styles";

interface EditorProps {
    isCreate: boolean;
}

const Editor: React.FC<EditorProps> = ({ isCreate }) => {
    const label = isCreate ? "Criar" : "Editar";

    let { id } = useParams();

    const formRef = useRef<FormHandles>(null);
    const handleSubmitForm = (data: any) => {
        console.log(data);
    };

    return (
        <Container>
            <CustomerHandler
                title="Novo usuário"
                subtitle="Informe os campos a seguir para criar novo usuário:"
            />

            <h1>{id}</h1>

            <FormContainer onSubmit={handleSubmitForm} ref={formRef}>
                <Input name="nome" maxLength={45} placeholder="Nome" />
                <Input name="email" maxLength={35} placeholder="Email" />
                <Input name="cpf" maxLength={14} placeholder="CPF" />
                <Input name="telefone" maxLength={15} placeholder="Telefone" />

                <CustomSelect options={customerStatus} />

                <BtnContent>
                    <Button label={label} type="submit" />
                    <Button label="Voltar" isOutline />
                </BtnContent>
            </FormContainer>
        </Container>
    );
};

export { Editor };
