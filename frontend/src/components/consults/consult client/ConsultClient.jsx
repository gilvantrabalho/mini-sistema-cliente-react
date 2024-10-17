import React, { useState, useEffect } from "react";
import './Style.css';

import Input from "../../inputs/Input/Input";
import RadioGroup from "../../inputs/radio/Radio";
import Select from "../../inputs/select/Select";
import States from "../../../services/States";
import { getAll } from "../../../api/CityApi";

const ConsultClient = ({ onFormSubmit }) => {

    const [cities, setCities] = useState([]);
    const [states, serStates] = useState(States);
    const [formData, setFormData] = useState({
        cpf: '',
        name: '',
        birthDate: '',
        gender: '',
        state: '',
        city: ''
    });

    useEffect(() => {
        allCities();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleChangeRadio = (value) => {
        setFormData({
            ...formData,
            gender: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formData)
        onFormSubmit(formData);
    }

    const handleReset = () => {
        setFormData({
            cpf: '',
            name: '',
            birthDate: '',
            gender: '',
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

    return (
        <form action="" method="post" onSubmit={handleSubmit}>
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
                <div className="col-md-4 mt-1">
                    <Select
                        label="Estado"
                        name="state"
                        options={states}
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4 mt-1">
                    <Select
                        label="Cidade"
                        name="city"
                        options={cities}
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-end mt-4 align-items-center">
                        <button type="submit" className="btn btn-primary me-1">Pesquisar</button>
                        <button type="reset" className="btn btn-secondary" onClick={handleReset}>Limpar</button>
                    </div>
                </div>
            </div>

        </form>
    );

}

export default ConsultClient;