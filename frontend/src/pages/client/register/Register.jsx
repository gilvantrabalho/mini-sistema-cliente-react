import React, { useRef } from "react";
import FormClient from "../../../components/forms/client/FormClient";
import Container from "../../../components/container/Container";
import { register } from "../../../api/ClientApi";
import { errorMessage, success } from "../../../services/Alert";

const RegisterClient = () => {
    const formClientRef = useRef(null);

    const handleFormData = (data) => {
        register(data)
            .then(res => {
                if (res.data.success) {
                    success(res.data.message);
                    if (formClientRef.current) {
                        formClientRef.current.handleReset();
                    }
                } else {
                    errorMessage(res.data.message);
                }
            })
            .catch(error => errorMessage(error.response.data.message));
    };

    return (
        <Container>
            <FormClient ref={formClientRef} onFormSubmit={handleFormData} />
        </Container>
    );
};

export default RegisterClient;
