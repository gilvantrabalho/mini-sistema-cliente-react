import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getClient, edit } from "../../../api/ClientApi";
import Container from "../../../components/container/Container";
import FormClient from "../../../components/forms/client/FormClient";
import { errorMessage, success } from "../../../services/Alert";

const EditClient = () => {
    const { id } = useParams();
    const [client, setClient] = useState(null);  // Inicia como null para esperar os dados
    const navigate = useNavigate();
    const formClientRef = useRef(null);

    useEffect(() => {
        showClient(id);
    }, [id]);

    const showClient = (id) => {
        getClient(id)
            .then(res => {
                let client = res.data.client;
                if (formClientRef.current) {
                    formClientRef.current.setDataEdit({
                        cpf: client.cpf,
                        name: client.name,
                        birthDate: client.birthDate.substring(0, 10),
                        gender: client.gender,
                        address: client.address,
                        state: client.state,
                        city: client.city_id
                    });
                }
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    navigate('/');
                }
            });
    }

    const handleFormData = (data) => {
        edit(id, data)
            .then(res => {
                if (res.data.success) {
                    success(res.data.message);
                    setTimeout(() => {
                        navigate('/');
                    }, 2000);
                } else {
                    errorMessage(res.data.message);
                }
            })
            .catch(error => errorMessage(error.response.data.message));
    }

    return (
        <div className="mt-3">
            <Container>
                <h4 className="mb-4">Editar cliente</h4>
                <FormClient ref={formClientRef} onFormSubmit={handleFormData} />
            </Container>
        </div>
    );
}

export default EditClient;
