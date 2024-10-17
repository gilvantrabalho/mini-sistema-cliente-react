import React, { useRef } from "react";
import Container from "../../../components/container/Container";
import { register } from "../../../api/RepresentativeApi";
import { errorMessage, success } from "../../../services/Alert";
import FormRepresentative from "../../../components/forms/representative/FormRepresentative";

const RepresentativeRegister = () => {

    const formRepresentative = useRef(null);

    const handleSubmit = (data) => {
        register(data)
            .then(res => {
                if (res.data.success) {
                    success(res.data.message);
                    if (formRepresentative.current) {
                        formRepresentative.current.handleReset();
                    }
                } else {
                    errorMessage(res.data.message);
                }
            })
            .catch(error => errorMessage(error.response.data.message));
    }

    return (
        <Container>
            <h4>Cadastrar Representante</h4>

            <FormRepresentative ref={formRepresentative} onFormSubmit={handleSubmit} />

        </Container>
    );

}

export default RepresentativeRegister;