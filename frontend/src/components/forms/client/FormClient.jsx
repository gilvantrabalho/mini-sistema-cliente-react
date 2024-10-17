import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import Input from "../../inputs/Input/Input";
import RadioGroup from "../../inputs/radio/Radio";
import Select from "../../inputs/select/Select";
import { getAll } from "../../../api/CityApi";
import States from "../../../services/States";
import { validateCPF } from "../../../services/Cpf";
import { errorMessage } from "../../../services/Alert";

const FormClient = forwardRef(({ onFormSubmit, editData }, ref) => {
    const [cities, setCities] = useState([]);
    const [states, serStates] = useState(States);
    const [formData, setFormData] = useState({
        cpf: '',
        name: '',
        birthDate: '',
        gender: '',
        address: '',
        state: '',
        city: ''
    });

    useEffect(() => {
        allCities();
    }, []);

    useEffect(() => {
        if (editData) {
            setFormData(editData);
        }
    }, [editData]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const setDataEdit = (data) => {
        setFormData(data);
    }

    const handleChangeRadio = (value) => {
        setFormData({
            ...formData,
            gender: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.cpf) {
            errorMessage('CPF é obrigatório');
            return;
        }
        if (!validateCPF(formData.cpf)) {
            errorMessage('CPF inválido');
            return;
        }
        if (!formData.name) {
            errorMessage('Nome é obrigatório');
            return;
        }
        if (!formData.birthDate) {
            errorMessage('Data de Nascimento é obrigatória');
            return;
        }
        if (!formData.gender) {
            errorMessage('Sexo é obrigatório');
            return;
        }
        if (!formData.address) {
            errorMessage('Endereço é obrigatório');
            return;
        }
        if (!formData.state) {
            errorMessage('Estado é obrigatório');
            return;
        }
        if (!formData.city) {
            errorMessage('Cidade é obrigatória');
            return;
        }

        const birthDate = new Date(formData.birthDate);
        const today = new Date();
        if (birthDate >= today) {
            errorMessage('Data de Nascimento deve ser no passado');
            return;
        }

        onFormSubmit(formData);
    };

    const handleReset = () => {
        setFormData({
            cpf: '',
            name: '',
            birthDate: '',
            gender: '',
            address: '',
            state: '',
            city: ''
        });
    };

    const allCities = () => {
        getAll()
            .then(res => {
                const cityOptions = res.data.cities.map(city => ({
                    id: city.id,
                    name: city.name
                }));
                setCities(cityOptions);
            })
            .catch(error => console.error(error));
    };

    useImperativeHandle(ref, () => ({
        handleReset,
        setDataEdit
    }));

    return (
        <form method="post" onSubmit={handleSubmit}>
            {editData}
            <div className="row">
                <div className="col-md-3">
                    <Input
                        label="CPF"
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        placeholder="000.000.000-00"
                    />
                </div>
                <div className="col-md-3">
                    <Input
                        label="Nome"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                    <Input
                        label="Data de Nascimento"
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-3">
                    <RadioGroup
                        label="Sexo"
                        name="gender"
                        options={['Masculino', 'Feminino']}
                        selectedOption={formData.gender}
                        onChange={handleChangeRadio}
                    />
                </div>
                <div className="col-md-4 mt-3">
                    <Input
                        label="Endereço"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4 mt-3">
                    <Select
                        label="Estado"
                        name="state"
                        options={states}
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4 mt-3">
                    <Select
                        label="Cidade"
                        name="city"
                        options={cities}
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary me-1">Salvar</button>
                <button type="reset" className="btn btn-secondary" onClick={handleReset}>Limpar</button>
            </div>
        </form>
    );
});

export default FormClient;
