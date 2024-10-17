import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import Input from "../../inputs/Input/Input";
import Select from "react-select";
import { getAll } from "../../../api/CityApi";
import './Style.css';
import { errorMessage } from "../../../services/Alert";

const FormRepresentative = forwardRef(({ onFormSubmit }, ref) => {
    useEffect(() => {
        allCities();
    }, []);

    const [cities, setCities] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        cities: []
    });

    const handleChange = (event) => {
        const { value } = event.target;
        setFormData({
            ...formData,
            name: value
        });
    };

    const handleCityChange = (selectedOptions) => {
        setFormData({
            ...formData,
            cities: selectedOptions
        });
    };

    const allCities = () => {
        getAll()
            .then(res => {
                const cityOptions = res.data.cities.map(city => ({
                    value: city.name,
                    label: city.name
                }));
                setCities(cityOptions);
            })
            .catch(error => console.error(error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.name) {
            errorMessage("O nome é obrigatório.");
            return;
        }

        if (formData.cities.length === 0) {
            errorMessage("Selecione pelo menos uma cidade.");
            return;
        }

        onFormSubmit(formData);
    };
    const handleReset = () => {
        setFormData({
            name: '',
            cities: []
        });
    }

    useImperativeHandle(ref, () => ({
        handleReset
    }));

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <Input
                        label="Nome"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Cidades</label>
                    <Select
                        isMulti
                        options={cities}
                        value={formData.cities}
                        onChange={handleCityChange}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </div>

            <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary me-1">Salvar</button>
                <button type="reset" className="btn btn-secondary">Limpar</button>
            </div>
        </form>
    );
});

export default FormRepresentative;
