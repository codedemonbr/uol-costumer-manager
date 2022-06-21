import React from "react";
import { Container } from "./styles";

interface SelectProps {
    options: { status: string; label: string; color?: string }[];
}

const CustomSelect: React.FC<SelectProps> = ({ options }) => {
    return (
        <Container>
            <select id="stutus">
                {options.map(({ status, label }) => (
                    <option key={status} value={status}>
                        {label}
                    </option>
                ))}
                {/* <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option> */}
            </select>
        </Container>
    );
};

export { CustomSelect };
