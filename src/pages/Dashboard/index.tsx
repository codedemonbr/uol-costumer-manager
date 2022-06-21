import React, { useCallback, useEffect, useState } from "react";
import { Customer } from "../../components/Customer";
import { CustomerHandler } from "../../components/CustomerHandler";
import { ICustomerDTO } from "../../dtos/ICustomerDTO";
import api from "../../services/api";

import { Content } from "./styles";

const Dashboard: React.FC = () => {
    const [customers, setCustomers] = useState<ICustomerDTO[]>(
        [] as ICustomerDTO[]
    );
    const getAllCustomers = useCallback(async () => {
        try {
            // console.log(process.env.REACT_APP_UOL_TEST_API);
            // console.log("getAllCustomers");
            const { data } = await api.get("/customers.json");

            // console.log(data);

            setCustomers(data.customers);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getAllCustomers();
    }, [getAllCustomers]);

    useEffect(() => {
        console.log(customers);
    }, [customers]);

    return (
        <>
            <Content>
                <CustomerHandler
                    title="Listagem de usuários"
                    subtitle="Escolha um cliente para visualizar os detalhes"
                    isCreate
                />
                {!!customers &&
                    customers.length > 0 &&
                    customers.map((customer) => (
                        <Customer
                            key={customer.id}
                            email={customer.email}
                            id={customer.id}
                            name={customer.name}
                            phone={customer.phone}
                            status={customer.status}
                        />
                    ))}
            </Content>
        </>
    );
};

export { Dashboard };
