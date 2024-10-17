import React, { useEffect, useState } from "react";
import { getAll } from "../../../api/RepresentativeApi";
import { getAll as getAllCities } from "../../../api/CityApi";
import Container from "../../../components/container/Container";
import ReactPaginate from 'react-paginate';

const RepresentativeList = () => {
    const [representatives, setRepresentatives] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        handleRepresentatives();
        allCities();
    }, []);

    const handleRepresentatives = (page = 0) => {
        getAll({ page })
            .then(res => {
                setRepresentatives(res.data.representatives);
                setPageCount(Math.ceil(res.data.total / itemsPerPage));
            })
            .catch(error => console.log(error));
    };

    const allCities = () => {
        getAllCities()
            .then(res => {
                const cityOptions = res.data.cities.map(city => ({
                    id: city.id,
                    name: city.name
                }));
                setCities(cityOptions);
            })
            .catch(error => console.error(error));
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        handleRepresentativesByCity(selectedCity);
    };

    const handleRepresentativesByCity = (cityId) => {
        getAll({ cityId })
            .then(res => {
                setRepresentatives(res.data.representatives);
                setPageCount(Math.ceil(res.data.total / itemsPerPage));
            })
            .catch(error => console.log(error));
    };

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
        handleRepresentatives(selectedPage);
    };

    return (
        <Container>
            <h4 className="mb-3">Representantes</h4>

            <div className="col-md-4 ms-auto">
                <form onSubmit={handleSearch} className="mb-3 d-flex">
                    <select className="form-select" value={selectedCity} onChange={handleCityChange}>
                        <option value="">Buscar por cidade</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>{city.name}</option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary ms-2">Buscar</button>
                </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th className='text-center bg-secondary text-white'>Nome</th>
                        <th className='text-center bg-secondary text-white'>Cidades</th>
                    </tr>
                </thead>
                <tbody>
                    {representatives.map(rep => (
                        <tr key={rep.id}>
                            <td className='text-center'>{rep.name}</td>
                            <td>
                                {
                                    rep.cities.map(city => (
                                        <div key={city.id} className="badge bg-info me-1 shadow-sm">{city.name}</div>
                                    ))
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ReactPaginate
                previousLabel={'← Voltar'}
                nextLabel={'Próximo →'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </Container>
    );
}

export default RepresentativeList;
